import { response, Router } from 'express'
import { CreateCategoryRepository } from '../repositories/CreateCategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()

const createCategoryRepository = new CreateCategoryRepository()

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(createCategoryRepository)

  try {
    createCategoryService.execute({ name, description })
    return response.status(201).send();
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

categoriesRoutes.get("/", (request, response) => {
  return response.json(createCategoryRepository.list())
})

export { categoriesRoutes }