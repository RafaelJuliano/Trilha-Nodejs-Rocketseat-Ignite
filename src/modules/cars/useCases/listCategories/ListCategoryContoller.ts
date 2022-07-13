import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { container } from 'tsyringe'

export class ListCategoryController {
    constructor() { }

    async handle(request, response) {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase)
        try {
            return response.json(await listCategoryUseCase.execute())
        } catch (error) {
            return response.status(500).json({ error: 'unespected error' })
        }
    }
}