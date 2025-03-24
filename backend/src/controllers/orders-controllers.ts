import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/appError";
import { knex } from "@/database/knex";
import {z} from "zod"


class OrdersControllers {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_session_id: z.number(),
                product_id: z.number(),
                quantity: z.number()
            })

            const {table_session_id, product_id, quantity} = bodySchema.parse(request.body)

            const session = await knex<tablesSessionsRepository>("tables_sessions").where({id: table_session_id}).first()

            if(!session){
                throw new AppError("Session not found")
            }

            if(session.closed_at){
                throw new AppError("This table is closed")
            }

            return response.status(201).json(session)
        } catch (error) {
        next(error)
        } 
    }
}

export { OrdersControllers }