import { Router } from "express";

import { productRoutes } from "./products-routes";
import { tablesRoutes } from "./tables-routes";
import { tablesSessionsRoutes } from "./table-sessions-routes";

const routes = Router();

routes.use("/table-sessions", tablesSessionsRoutes )
routes.use("/products", productRoutes);
routes.use("/tables", tablesRoutes)

export { routes };
