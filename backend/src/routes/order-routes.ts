import { Router } from "express";

import { OrdersControllers } from "@/controllers/orders-controllers";

const ordersRoutes = Router();

const ordersController = new OrdersControllers();

ordersRoutes.post("/", ordersController.create)

export { ordersRoutes };