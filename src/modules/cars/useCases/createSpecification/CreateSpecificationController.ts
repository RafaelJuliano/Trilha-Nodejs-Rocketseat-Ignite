import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

export class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

    handle(request, response) {
        const { name, description } = request.body

        try {
            console.log('creating specification')
            this.createSpecificationUseCase.execute({ name, description })
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }

        return response.status(201).send()
    }
}