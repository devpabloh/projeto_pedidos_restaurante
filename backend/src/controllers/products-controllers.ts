import {z} from "zod"
import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex";

class ProductController{

    async index(request: Request, response: Response, next: NextFunction){
        try{
            const {name} = request.query
            const products = await knex<ProductRepository>("products").select().whereLike("name", `${name}?? "`).orderBy("name")

            return response.json(products)
        }catch(error){
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction){
        try {
            const bodySchema = z.object({
                name: z.string().trim().min(6),
                price: z.number().gt(0, {message: "Value must be greater than 0"}),
                description: z.string().min(15)
            })

            const {name, price, description} = bodySchema.parse(request.body)

            await knex<ProductRepository>("products").insert({name, price, description})

            return response.status(201).json({name, price, description})
        } catch (error) {
            next(error)
        }
    }
}

export {ProductController}