const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK.'})
})

app.listen(9000, () => {
    console.log(`Server ok 9000`)
})