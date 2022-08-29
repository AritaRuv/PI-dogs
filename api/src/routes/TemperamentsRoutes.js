const express = require("express");
const TemperamentsRouter = express.Router();
const { Temperament } = require('../db')

TemperamentsRouter.get('/', async (req,res) =>{
    try {
        let temperaments = await Temperament.findAll({
            order: ['name']
        })
        if(temperaments){
            res.json(temperaments)
        }
    } catch (error) {
        res.status(404).send(error)
    }
    
})

module.exports = TemperamentsRouter