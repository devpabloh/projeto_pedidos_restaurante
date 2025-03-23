import { Request, Response, NextFunction } from "express";


class OrdersControllers {
    async create(request: Request, response: Response, next: NextFunction) {
        try {
            
        } catch (error) {
        next(error)
        } 
    }
}

export { OrdersControllers }