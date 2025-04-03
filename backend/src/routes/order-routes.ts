import { Router } from "express";

import { OrdersControllers } from "@/controllers/orders-controllers";

const ordersRoutes = Router();

const ordersController = new OrdersControllers();

ordersRoutes.post("/", ordersController.create)
ordersRoutes.get("/table-session/:table_session_id", ordersController.index)
ordersRoutes.get("/table-session/:table_session_id/total", ordersController.show )

export { ordersRoutes };