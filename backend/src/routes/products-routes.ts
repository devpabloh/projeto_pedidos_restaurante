import { Router } from "express";
import { ProductController } from "@/controllers/products-controllers";

const productRoutes = Router();
const productsController = new ProductController();

productRoutes.get("/", productsController.index)
productRoutes.post("/", productsController.create)
productRoutes.put("/:id", productsController.update)
productRoutes.delete("/:id", productsController.remove)

export {productRoutes}