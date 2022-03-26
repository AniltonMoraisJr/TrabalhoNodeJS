import { CREATED, OK } from "http-status";
import { findAllCustomers, persistCustomer } from "./customer-business";
import { createCustomerDeserializer } from "./customer-deserializer";
import {
  createCustomerSerializer,
  listCustomersSerializer,
} from "./customer-serializer";
import {
  CustomerCreationRequestHandler,
  CustomerListAllRequestHandler,
} from "./customer-type";
import {
  createCustomerValidator,
  listCustomersValidator,
} from "./customer-validator";

const createCustomer = (): CustomerCreationRequestHandler[] => {
  return [
    createCustomerValidator(),
    createCustomerDeserializer,
    persistCustomer,
    createCustomerSerializer,
    (req, res) => {
      res.status(CREATED).json(res.locals.customerToRespond);
    },
  ];
};

const listCustomers = (): CustomerListAllRequestHandler[] => {
  return [
    listCustomersValidator(),
    findAllCustomers,
    listCustomersSerializer,
    (req, res) => {
      res.status(OK).json(res.locals.listOfAllCustomersToRespond);
    },
  ];
};

export { createCustomer, listCustomers };
