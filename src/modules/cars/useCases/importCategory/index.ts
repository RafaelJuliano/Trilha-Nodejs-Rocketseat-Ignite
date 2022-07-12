import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

export default (): ImportCategoryController => {
    const categoryRepository = new CategoryRepository()
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
    const importCategoryController = new ImportCategoryController(importCategoryUseCase)
    return importCategoryController
}
