const express = require('express')
const cors = require('cors')

const authRouter = require('./auth/auth.router')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK.'})
})

app.use('/api/v1/auth', authRouter)

app.listen(9000, () => {
    console.log(`Server ok 9000`)
})