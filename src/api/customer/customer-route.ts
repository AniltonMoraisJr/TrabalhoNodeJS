import { Router } from "express";
import { createCustomer, listCustomers } from "./customer-controller";

const route = Router();

route.post("/v1/customers", ...createCustomer());

route.get("/v1/customers", ...listCustomers());

export default route;
