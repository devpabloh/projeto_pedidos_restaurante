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

    async index(request: Request, response: Response, next: NextFunction){
        try{
            const sessions = await knex<tablesSessionsRepository>("tables_sessions").select().orderBy("closed_at")

            return response.status(200).json(sessions)
        }catch(error){
            next(error)
        }
    }

    async update(request: Request, response: Response, next: NextFunction){
        try{
            const id = z.string().transform((value)=> Number(value)).refine((value)=> !isNaN(value), {message: "id must be a number"}).parse(request.params.id)

            return response.json()

        }catch(error){
            next(error)
        }
    }
}


export  {TablesSessionsControllers}