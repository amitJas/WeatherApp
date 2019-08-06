const request = require('request')

//get the location data
const geocode = (address, callback) => {
    //encodeURIComponent use to convert chars char to url chars  => safe url
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)  + '.json?access_token=pk.eyJ1IjoiYW1pdGphcyIsImEiOiJjanl4M2Q2eGkweHNwM2JtcDJuc2ViaXc2In0.ZcVWyHKODScCz3GDiPDzMg'
    request({url: url, json: true} , (error, response) => {
            if(error){
                callback('Unable to connect to location service!')
            }else if(response.body.features.length === 0){
                callback('Unable to find location . Try another search')
            }else{
                callback(undefined, {
                    latitude: response.body.features[0].center[0],
                    longitude:  response.body.features[0].center[1],
                    location: response.body.features[0].place_name
                })  
            }       
    })
}


 


module.exports =  geocode
