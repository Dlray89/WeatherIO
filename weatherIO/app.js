const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e0074c28f1e04ecf47ec226327d0c2b1&query=37.8267,-122.4233'


request({ url: url }, (err, res) => {
    const data = JSON.parse(res.body)
    console.log(data.current)    
})