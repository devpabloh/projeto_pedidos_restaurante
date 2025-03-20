import { Router } from "express";

import { TablesSessionsControllers } from "@/controllers/tables-sessions-controllers";

const tablesSessionsRoutes = Router()

const tablesSessionController = new TablesSessionsControllers()

tablesSessionsRoutes.post("/", tablesSessionController.create)

export {tablesSessionsRoutes}