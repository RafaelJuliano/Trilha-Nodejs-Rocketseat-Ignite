import { ImportCategoryUseCase } from "./ImportCategoryController"

export class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

    handle(request, response) {
        const { file } = request
        this.importCategoryUseCase.execute(file)
        response.send()
    }
}