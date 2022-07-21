import { Router } from 'express'
import { CreateSessionController } from '../modules/users/useCases/createSession/CreateSessionController'

const sessionsRoutes = Router()

const createSessionController = new CreateSessionController()

sessionsRoutes.post('/', createSessionController.handle)

export { sessionsRoutes }