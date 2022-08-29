const axios = require('axios');
const { Dog, Temperament } = require('../db.js');


const getDogsApi = async () => {
    const apiURL = await axios('https://api.thedogapi.com/v1/breeds?api_key=adf36025-d4e9-4d55-bb5c-96a335d96187 ')
    const apiDogs = await apiURL.data.map(e => {
        return{
            id: e.id,
            name: e.name,
            height_min: e.height.metric.split(' -')[0],
            height_max: e.height.metric.split('- ')[1],
            weight_min: e.weight.metric.split(' -')[0],
            weight_max: e.weight.metric.split('- ')[1],
            life_span: e.life_span,
            image: e.image.url,
            temperaments: [e.temperament].join().split(', ').map(e => {
             return { name : e }
            })
        }
    })
    return apiDogs
}

const getDogsDb = async () => {

    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        })
    }


const getAllDogs = async () => {
    const apiDogs = await getDogsApi()
    const dbDogs= await getDogsDb()
    const allDogs = apiDogs.concat(dbDogs)
    return allDogs
}

module.exports = getAllDogs
