import { CreateCategoryRepository } from "../../repositories/CreateCategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const createCategoryRepository = new CreateCategoryRepository

const createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }