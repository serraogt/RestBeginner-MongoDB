const express = require('express')
const router = express.Router()
const Country = require('../models/country')
const country = require('../models/country')

//getting all
router.get('/', async (req,res) => {
    try{
        const countries = await Country.find()
        res.json(this.countries)
    }
    catch (err){
        res.status(500).json({message: err. message})
    }
})

//getting one
router.get('/:id',(req,res) => {
    res.send(res.country.name)
})

//creating one
router.post('/',async (req,res) => {
   const country = new Country({
    name: req.body.name,
    unMember: req.body.unMember
   })

   try{
    const newCountry = await country.save()
    res.status(201).json(newCountry)
}  catch (err){
    res.status(400).json({ message: err.message})
    //something wrong with user input
}
})

//updating one
router.patch('/:id',(req,res) => {

})

//deleting all
router.delete('/:id',(req,res) => {
})

async function getCountry(req, res, next){
    try{
        country = await Country.findById(req.params.id)
        if(country == null){
            return res.status(404).json({ message: "Cannot find that country"})
        }
    } catch (err){
        return res.status(500).json({ message: err.message })
    }

    res.country =country
    next()
}
module.exports = router ;