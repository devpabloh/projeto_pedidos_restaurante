import { Router } from "express";
import { TablesControler } from "@/controllers/tables-controllers";

const tablesRutes = Router();
const tablesControler = new TablesControler();

tablesRutes.get("/", tablesControler.index)

export { tablesRutes }