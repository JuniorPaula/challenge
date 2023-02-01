import { Router } from 'express'
import { StatesController } from '../controllers/states-controller.js'

const statesRouter = Router()

const statesController = new StatesController()

statesRouter.get('/', statesController.handle)

export { statesRouter }
