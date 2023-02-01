import { Router } from 'express'
import { PopulationController } from '../controllers/population-controller.js'

const populationRouter = Router()

const populationController = new PopulationController()

populationRouter.get('/:uf', populationController.handle)

export { populationRouter }
