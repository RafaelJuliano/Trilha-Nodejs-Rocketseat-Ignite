import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryContoller";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


export default (): ListCategoryController => {
    const categoryRepository = new CategoryRepository()
    const listCategoryUseCase = new ListCategoryUseCase(categoryRepository)
    const listCategoryController = new ListCategoryController(listCategoryUseCase)

    return listCategoryController
}

