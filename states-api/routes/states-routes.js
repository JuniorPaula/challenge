import { Router } from 'express'
import { LoadStatesController } from '../controllers/load-states-controller.js'
import { StatesController } from '../controllers/states-controller.js'

const statesRouter = Router()

const statesController = new StatesController()
const loadStatesController = new LoadStatesController()

statesRouter.get('/', statesController.handle)
statesRouter.get('/load', loadStatesController.handle)

export { statesRouter }
