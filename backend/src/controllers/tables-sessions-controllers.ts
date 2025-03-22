import {Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/appError';
import { knex } from '@/database/knex';
import {z} from 'zod';

class TablesSessionsControllers {
    async create(request: Request, response: Response, next: NextFunction){
        try {
            const bodySchema = z.object({
                table_id: z.number(),
            })

            const {table_id} = bodySchema.parse(request.body)

            const session = await knex<tablesSessionsRepository>("tables_sessions").select().where({table_id}).orderBy("opened_at", "desc").first()

            if(session && !session.closed_at){
                throw new AppError("Table already has an open session")
            }
            
            await knex<tablesSessionsRepository>("tables_sessions").insert({
                table_id,
                opened_at: knex.fn.now(),
            })

            return response.status(201).json()  
        } catch (error) {
            next(error)
        }
    }
}


export  {TablesSessionsControllers}