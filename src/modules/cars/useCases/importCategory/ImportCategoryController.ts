import { ImportCategoryUseCase } from "./ImportCategoryUseCase"
import { container } from 'tsyringe'

export class ImportCategoryController {
    constructor() { }

    async handle(request, response) {
        const { file } = request
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

        try {
            await importCategoryUseCase.execute(file)
            response.status(201).send()
        } catch (error) {
            return response.status(500).json({ error: 'unespected error' })
        }
    }
}