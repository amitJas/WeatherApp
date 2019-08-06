const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback ) =>{

    const url = 'https://api.darksky.net/forecast/10e2da7268efd8da5529695d120b837c/' + 
                        encodeURIComponent(longitude)+ ',' + encodeURIComponent(latitude) + '?units=us'

    request({url: url, json: true} , (error, response) => {

        if(error){
            callback(chalk.magenta('Unable to connect to weather service!'))
        }else if(response.body.error){
           callback(chalk.red('Unable to find location!'))
        }else{
            callback(undefined, console.log(response.body.daily.data[0].summary + ' Its is currently ' 
            + response.body.currently.temperature + ' degrees'))
        }
    })
}

module.exports = forecast