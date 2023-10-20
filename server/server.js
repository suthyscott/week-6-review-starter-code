const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getSushi, addSushi, getFish} = require('./controller')

app.get('/sushi', getSushi)
app.post('/sushi', addSushi)
app.get('/sushi/:id', getFish)

app.listen(6543, () => console.log('Eating sushi on port 6543'))