const express = require('express')
const bodyParser = require('body-parser')
const plant = require('./http/controllers/plant')

const HTTP_PORT = process.env.HTTP_PORT

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res) => {
  res.header('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type')
})

app.use(plant)

app.listen(HTTP_PORT)
