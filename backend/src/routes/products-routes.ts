import { Router } from "express";
import { ProductController } from "@/controllers/products-controllers";

const productRoutes = Router();
const productsController = new ProductController();

productRoutes.get("/", productsController.index)
productRoutes.post("/", productsController.create)

export {productRoutes}