import {
  CustomerCreationRequestHandler,
  CustomerListAllRequestHandler,
} from "./customer-type";

const createCustomerSerializer: CustomerCreationRequestHandler = (
  req,
  res,
  next
) => {
  const { customerCreated } = res.locals;
  res.locals.customerToRespond = {
    uuid: customerCreated.uuid,
    name: customerCreated.name,
    contact: {
      email: customerCreated.email,
      phone: customerCreated.phone,
    },
    document: {
      cpf: customerCreated.cpf,
      cnpj: customerCreated.cnpj,
    },
    createdAt: customerCreated.createdAt.toISOString(),
    updatedAt: customerCreated.updatedAt.toISOString(),
  };
  next();
};

const listCustomersSerializer: CustomerListAllRequestHandler = async (
  req,
  res,
  next
) => {
  const { listOfAllCustomers } = res.locals;
  console.log(listOfAllCustomers);
  res.locals.listOfAllCustomersToRespond = listOfAllCustomers.map(
    (customer) => ({
      uuid: customer.uuid,
      name: customer.name,
      contact: {
        email: customer.email,
        phone: customer.phone,
      },
      document: {
        cpf: customer.cpf,
        cnpj: customer.cnpj,
      },
      createdAt: customer.createdAt.toISOString(),
      updatedAt: customer.updatedAt.toISOString(),
    })
  );
  console.log(res.locals.listOfAllCustomersToRespond);
  next();
};

export { createCustomerSerializer, listCustomersSerializer };
