import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const createCategoryRepository = new CategoryRepository

const createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }