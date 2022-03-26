import { CustomerCreationRequestHandler } from "./customer-type";

const createCustomerDeserializer: CustomerCreationRequestHandler  = (req, res, next) => {
    res.locals.customerToCreate = {
        name: req.body.name,
        ...req.body.contact,
        ...req.body.document
    }
    next();
}

export {
    createCustomerDeserializer
}