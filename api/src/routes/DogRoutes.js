const express = require("express");
const DogRouter = express.Router();
const createDog = require('../Controllers/createDog.js');
const { Dog } = require('../../src/db.js')


DogRouter.post('/', async(req,res)=>{
   
   
    const { id, name, height_min, height_max, weight_min, weight_max, life_span, temperaments, image } = req.body
        if(id, name, height_min, height_max, weight_min, weight_max, temperaments){
            try {
                const newDog = await createDog(id, name,height_min, height_max, weight_min, weight_max, life_span, temperaments, image)
                res.status(200).json(newDog)
            }catch (error) {
                res.status(404).send(error)
            }}else{
                res.status(404).send('You must complete all the required information')
            }})

DogRouter.delete('/:id', async(req,res)=>{
    
    const { id } = req.params
    if(!id) res.status(404).send('ID required')
    try{
        await Dog.destroy({
            where: {
                id: id
            }})
        res.status(200).send('Dog deleted correctly')
    }catch(error){
        res.status(404).send(error)
    }
})

module.exports = DogRouter