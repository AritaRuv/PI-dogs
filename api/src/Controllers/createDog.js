const { Dog, Temperament } = require('../db.js');

let createDog = async (id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, image) => {
    const newDog = await Dog.create({
        id,
        name,
        height_min, 
        height_max, 
        weight_min, 
        weight_max,
        life_span: life_span + ' years', 
        image
    })
    temperaments.map(async el =>{
        const findTemp = await Temperament.findAll({
            where: {name: el}
        })
        newDog.addTemperament(findTemp)
    })
    return newDog
}

module.exports = createDog