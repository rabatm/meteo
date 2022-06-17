const apiKey ='850f27fce52c74a592c8106cd088d0a6';
const coord = require('./getCoord');
const axios = require('axios');

module.exports.getMeteo =  function (city){
    //on récupére les coordonnées de la ville 
    
coord.getCoord(city).then(async (coord) => {
    if ((coord.lat>0) && (coord.lon>0))
    {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric&lang=fr`); 
    console.log("Ville : " + res.data.name + " Meteo :" + res.data.weather[0].description + " Température actuelle : " + res.data.main.temp + "° Minimale : " + res.data.main.temp_min + " Maximale :" + res.data.main.temp_max + "°" )
    }
    else
    {
        console.error("VILLE INTROUVABLEEEEEEEEE !!! ou située sur une autre planete.")
    }
})
}