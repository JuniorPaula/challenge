import express from 'express'
import { router } from './routes/index.js'

const app = express()
app.use(express.json())

app.use(router)

app.listen(5000, () => console.log('[::] 5000 - server is running'))
