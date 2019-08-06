const request = require('request')

const url = 'https://api.darksky.net/forecast/10e2da7268efd8da5529695d120b837c/37.8267,-122.4233?units=us&lang=he'

request({url: url, json: true} , (error, response) => {
    //console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary + ' Its is currently ' 
                + response.body.currently.temperature + ' degrees')
})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1pdGphcyIsImEiOiJjanl4M2Q2eGkweHNwM2JtcDJuc2ViaXc2In0.ZcVWyHKODScCz3GDiPDzMg&limit=1"
request({url: geocodeURL, json: true} , (error, response) => {
    console.log(response.body.features[0].center[0],response.body.features[0].center[1])
})
