const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
    params: {latlng: null, result_type: 'country', language: 'en'},
    headers: {
      'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_GEOCODING_API_KEY
    }
  };

exports.getCountryFromCoordinates = (req, res) => {
    options.params.latlng = `${req.query.lat},${req.query.lon}`
    axios.request(options).then(response =>  {
        res.send(response.data.results[0].formatted_address)
    }).catch(error => {
        console.error(error);
    });
}