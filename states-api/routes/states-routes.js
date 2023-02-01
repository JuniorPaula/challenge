import { Router } from 'express'

const statesRouter = Router()

statesRouter.get('/', async (req, res) => {
    return res.end('hello states')
})

export { statesRouter }