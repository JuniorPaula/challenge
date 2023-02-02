import express from 'express'
import { router } from './routes/index.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(4000, () => console.log('[::] 4000 - server is running'))
