import {Request, Response, NextFunction } from 'express';
import { knex } from '@/database/knex';

class TablesSessionsControllers {
    index(response: Response, request: Request, next: NextFunction){
        try {
            
        } catch (error) {
            next(error)
        }
    }
}
