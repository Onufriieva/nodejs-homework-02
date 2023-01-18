const express = require('express')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config()


const contactsRouter = require('./routes/api/contacts');
const authRouter = require('./routes/api/authorization');

const { authMiddleware } = require('./middlewares');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/api/users", authRouter)
app.use('/api/contacts',authMiddleware, contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message })
})

module.exports = app