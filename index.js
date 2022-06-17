
//Récupération du nm de la ville à partir des args 
const ville = process.argv[2]

const meteo = require('./getMeteo')

if (ville) meteo.getMeteo(ville)
else console.error("Il faut saisir une ville !! sinon pas de météo ....╭∩╮(-_-)╭∩╮")