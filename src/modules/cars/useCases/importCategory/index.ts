import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";

const categoryRepository = CategoryRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }