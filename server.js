const express = require('express')
const cors = require('cors')
const locationController = require('./src/controllers/locationController')

const { getCountryFromCoordinates } = locationController

const app = express()

app.use(cors())

// app.get('/', (req, res) => {
//     res.json('test')
// })

app.get('/coordinates', (req, res) => {
    try {
        const country = getCountryFromCoordinates(req.query.lat, req.query.lon)
        console.log(country)
       return res.send(country)
    } catch(err) {
        console.error(err)
    } 
})

app.listen(4000, () => {console.log('App listening on port 4000...')})
