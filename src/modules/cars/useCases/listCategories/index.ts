import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryController } from "./ListCategoryContoller";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


const categoryRepository = new CategoryRepository
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
const listCategoryController = new ListCategoryController(listCategoryUseCase)

export { listCategoryController }