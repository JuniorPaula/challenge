import { Router } from 'express'
import { statesRouter } from './states-routes.js'
import { populationRouter } from './population-routes.js'

const router = Router()

router.use('/states', statesRouter)
router.use('/population', populationRouter)

export { router }
