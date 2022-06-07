import { request, response, Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
  // return response.json(createCategoryRepository.list())
})

export { categoriesRoutes }