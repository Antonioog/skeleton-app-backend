const express = require('express')
const cors = require('cors')
require('dotenv').config()

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const db = require('./utils/database')
//const initModels = require('./models/initModels')



const app = express()

//Validar la conexion de la base de datos...
db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database synced!'))  
    .catch(err => console.log(err))  

//initModels()  

app.use(express.json())
app.use(cors())

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} | ${req.path}`)
    next()
}

app.use(loggerMiddleware)


app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK.'})
})
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(9000, () => {
    console.log(`Server ok 9000`)
})