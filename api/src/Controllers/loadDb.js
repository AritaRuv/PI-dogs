const axios = require('axios');
const { Temperament } = require('../db')
const apiURL = 'https://api.thedogapi.com/v1/breeds?api_key=adf36025-d4e9-4d55-bb5c-96a335d96187'

let loadDb = async () =>{
   try {
       let arrayTemps = []
       axios.get(apiURL)
       .then( response => {
           //response es un array de objetos, donde tenemos que ingresar a la prop temperaments
           //response.data.temperaments = 'lindo, feo, grande, chico'

          response.data?.forEach(element => {
                
               let temps = element.temperament?.split(', ')
               arrayTemps.push(temps) 
           });
           arrayTemps = arrayTemps.flat()
           let set = new Set(arrayTemps)
           set.forEach(t =>{
            if(t != undefined){
                Temperament.findOrCreate({ where: { name: t } })
            }
           });
           
       })
    
   } catch (error) {
     console.log(error)
   } 

}


module.exports = loadDb