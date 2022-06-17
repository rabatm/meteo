// entré : nom de ville
// sorti objet avec longitude latitude.
// fonction qui va retourner une logitude et latitude 
//key pour l'api de openweathermap
const apiKey ='850f27fce52c74a592c8106cd088d0a6';
const axios = require('axios');

module.exports.getCoord = async function (city){
    //initialisation de la lat et lon
    let co = {lat:0,lon:0};
    
    const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`); 
    
    if ( res.data.length > 0 )
    {   
            co={lat:res.data[0].lat,lon:res.data[0].lon}
    }
    return co;
}