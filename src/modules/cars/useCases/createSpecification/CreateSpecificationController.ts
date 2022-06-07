import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

export class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

    handle(request, response) {
        const { name, description } = request.body

        this.createSpecificationUseCase.execute({ name, description })

        return response.status(201).send()
    }
}