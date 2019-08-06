const request = require('request')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/10e2da7268efd8da5529695d120b837c/37.8267,-122.4233?units=us'
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1pdGphcyIsImEiOiJjanl4M2Q2eGkweHNwM2JtcDJuc2ViaXc2In0.ZcVWyHKODScCz3GDiPDzMg"

//get the weather data 
request({url: url, json: true} , (error, response) => {

    if(error){
        console.log(chalk.yellow('Unable to connect to weather service!'))
    }else if(response.body.error){
        console.log(chalk.red('Unable to find location!'))
    }else{
        console.log(response.body.daily.data[0].summary + ' Its is currently ' 
        + response.body.currently.temperature + ' degrees')
    }
})


//get the location data
request({url: geocodeURL, json: true} , (error, response) => {
    if(error){
        console.log(chalk.yellow('Unable to connect to location service!'))
    }else if(response.body.error){
        console.log(chalk.magenta('Unable to find location!'))
    }else{
        let latitude = response.body.features[0].center[1]
        let longitude = response.body.features[0].center[0]
        console.log(latitude,longitude)
    }
    
})
