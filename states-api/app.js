import express from 'express'

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    return res.end('hello')
})

app.listen(4000, () => console.log('[::] 4000 - server is running'))