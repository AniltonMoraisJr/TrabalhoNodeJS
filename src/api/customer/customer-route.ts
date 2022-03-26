import { Router } from 'express';
import { createCustomer } from './customer-controller';

const route = Router();

route.post('/v1/customers', ...createCustomer());

export default route;