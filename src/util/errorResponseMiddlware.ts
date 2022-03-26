import { CelebrateError, errors, Joi } from "celebrate";
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { UniqueConstraintError } from "sequelize";

type CelebrateParams = {
    message: string,
    validation: {
        segment: string,
        path: string,
        message: string
    }
}

const celebrateError = ({ message, validation } : CelebrateParams) => {
    const celebrateError = new CelebrateError(message, {
        celebrated: true,
    });

    const joiValidationError = new Joi.ValidationError(validation.message, [
        { path: [validation.path] }
    ], null);

    celebrateError.details.set(validation.segment, joiValidationError);
    return celebrateError;
}

const errorResponseMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof UniqueConstraintError) {
        const errorParams: CelebrateParams = {
            message: error.message,
            validation: {
                message: error.errors[0].message,
                path: error.errors[0].path || '',
                segment: 'body'
            }
        }
        return errors({statusCode: httpStatus.CONFLICT})(celebrateError(errorParams), req, res, next);
    }
    return errors()(error, req, res, next);
}

export {
    errorResponseMiddleware
};
