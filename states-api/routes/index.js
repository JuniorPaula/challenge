import { Router } from 'express'
import { statesRouter } from './states-routes.js'

const router = Router()

router.use('/states', statesRouter)

export { router }
