import { Request, Response } from 'express'
import { container } from "tsyringe";
import { CreateSessionUseCase } from './CreateSessionUseCase';

export class CreateSessionController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body

        const createSessionUseCase = container.resolve(CreateSessionUseCase)

        try {
            const token = await createSessionUseCase.execute({
                email,
                password
            })
            return response.status(200).json(token);
        } catch (error) {
            return response.status(403).send(error.message)
        }

    }
}