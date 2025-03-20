import { Router } from "express";
import { TablesControler } from "@/controllers/tables-controllers";

const tablesRoutes = Router();
const tablesControler = new TablesControler();

tablesRoutes.get("/", tablesControler.index)

export { tablesRoutes }