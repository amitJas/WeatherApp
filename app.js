
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode('israel', (error, geocodeData) => {
    if(error){
        return console.log('Error geocode',error)
    }
   
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
      if(error){
        return console.log('Error ',error)
      }
      console.log('Error in forecast', error)
      console.log('Data', forecastData)
  })
})