import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/appError";

class ProductController{

    async index(request: Request, response: Response, next: NextFunction){
        try{
            throw new AppError("Erro de teste")

            return response.json({message: "está funcionando"})
        }catch(error){
            next(error)
        }
    }
}

export {ProductController}