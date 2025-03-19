import { Router } from "express";

import { productRoutes } from "./products-routes";
import { tablesRutes } from "./tables-routes";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/tables", tablesRutes)


export { routes };
