import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {

    constructor(private createCategoyUseCase: CreateCategoryUseCase) { }
    handle(request, response) {
        const { name, description } = request.body;
        try {
            this.createCategoyUseCase.execute({ name, description })
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }
    }
}