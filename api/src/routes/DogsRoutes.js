const express = require("express");
const DogsRouter = express.Router();
const getAllDogs = require('../Controllers/getDogs.js');




DogsRouter.get('/', async (req,res) => {

    let totalDogs = await getAllDogs()
    
    const { name } = req.query
    try {
        if(name){
            let dogFilter = await totalDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            dogFilter.length ? res.status(200).json(dogFilter) : res.status(404).send(`The breed you are searching does not exist`)
        }else{
           res.status(200).json(totalDogs)
        }   
    } catch (error) {
        res.status(404).send(error)
    }
})

DogsRouter.get('/:breedID', async (req, res) => {
    
    const { breedID } = req.params
    let totalDogs = await getAllDogs()
    
    try {
        if(breedID){
            let idFilter = await totalDogs.filter(e => e.id == breedID)
            idFilter.length ? res.status(200).json(idFilter) : res.status(404).send(`Sorry, the id ${breedID} does not exist`)
        }
    } catch (error) {
        res.status(404).send(error)
    }
} )





module.exports = DogsRouter