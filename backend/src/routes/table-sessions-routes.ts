import { Router } from "express";

import { TablesSessionsControllers } from "@/controllers/tables-sessions-controllers";

const tablesSessionsRoutes = Router()

const tablesSessionController = new TablesSessionsControllers()

tablesSessionsRoutes.post("/", tablesSessionController.create)
tablesSessionsRoutes.get("/", tablesSessionController.index)
tablesSessionsRoutes.patch("/:id", tablesSessionController.update)

export {tablesSessionsRoutes}