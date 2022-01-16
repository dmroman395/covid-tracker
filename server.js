const express = require('express')
const cors = require('cors')
const locationController = require('./src/controllers/locationController')

const { getCountryFromCoordinates } = locationController

const app = express()

app.use(cors())

app.get('/coordinates', getCountryFromCoordinates)

app.listen(4000, () => {console.log('App listening on port 4000...')})
