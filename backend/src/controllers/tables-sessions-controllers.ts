import {Request, Response, NextFunction } from 'express';
import { knex } from '@/database/knex';
import {z} from 'zod';

class TablesSessionsControllers {
    async create(request: Request, response: Response, next: NextFunction){
        try {
            const bodySchema = z.object({
                table_id: z.number(),
            })

            const {table_id} = bodySchema.parse(request.body)
            
            await knex("tables_sessions").insert({
                table_id,
            })

            return response.status(201).json()  
        } catch (error) {
            next(error)
        }
    }
}


export  {TablesSessionsControllers}