import { Router } from "express";
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { validateToken } from '../middlewares/ValidateToken'

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationRoutes.post("/", validateToken, createSpecificationController.handle)

export { specificationRoutes };