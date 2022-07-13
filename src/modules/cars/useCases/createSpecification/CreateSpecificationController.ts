import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"
import { container } from 'tsyringe'

export class CreateSpecificationController {
    constructor() { }

    async handle(request, response) {
        const { name, description } = request.body

        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
        try {
            console.log('creating specification')
            await createSpecificationUseCase.execute({ name, description })
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }
    }
}