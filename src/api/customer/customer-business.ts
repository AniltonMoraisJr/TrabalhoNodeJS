import { Customer } from "./customer-model";
import {
  CustomerCreationRequestHandler,
  CustomerListAllRequestHandler,
} from "./customer-type";

const persistCustomer: CustomerCreationRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { customerToCreate } = res.locals;
    res.locals.customerCreated = await Customer.create(customerToCreate);
    next();
  } catch (error) {
    next(error);
  }
};

const findAllCustomers: CustomerListAllRequestHandler = async (
  req,
  res,
  next
) => {
  const { offset = 0, limit = 50 } = req.query;
  try {
    res.locals.listOfAllCustomers = await Customer.findAll({
      offset: Number(offset),
      limit: Number(limit),
    });
    next();
  } catch (error) {
    next(error);
  }
};

export { persistCustomer, findAllCustomers };
