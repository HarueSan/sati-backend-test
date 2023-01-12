import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import apiRouter from './routers/apiRouter'

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get('/', (req, res) => res.send("Hello this is my EXPRESS API"))

app.use('/api', apiRouter)

const PORT = process.env.PORT || "3000"

app.listen(PORT, () => console.info(`This api running on http://localhost:${PORT}`))