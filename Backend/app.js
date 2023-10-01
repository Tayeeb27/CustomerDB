const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.get('/', (req, res) => res.send({message:'Welcome'}))
app.post('/', (req, res) => res.status(405).send('Not allowed!'))

const customerRoutes = require('./routers/customers');
app.use('/customers', customerRoutes);

const loginRoutes = require('./routers/login');
app.use('/login', loginRoutes);


module.exports = app