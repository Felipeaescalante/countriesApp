const { Router } = require('express');
const {Country, Activities} = require('../db.js');
const bodyParser = require('body-parser')
const axios = require('axios');
const {Op} = require('sequelize')



const router = Router();



router.get('/', async (req, res) => {  //por nombre y pasando los datos de la API a mi DB filtrando los objetos con lo requerido. 

    let {name} = req.query;

    if(name) {
        try{
            return res.status(200).json(
                await Country.findAll({
                    // where: { Name},
                    where:{ Name: {[Op.iLike] : `%${name}%` }},
                    include: [Activities]
                    
                   
                })
                )
        }
        catch(error) {
            console.log(error)
            res.status(404).send('Error by name')
        }
    } else {
        try{
            const country = await Country.count();
            if(country === 0) {
                const Countries = await axios.get('https://restcountries.eu/rest/v2/all')
                Countries.data.forEach(async(c)=>{
                    await Country.findOrCreate({
                        where: {
                            ID: c.alpha3Code,
                            Name: c.name,
                            Flag: c.flag,
                            Region: c.region,
                            Capital: c.capital,
                            Subregion: c.subregion,
                            Area: c.area ? c.area.toString() : null,
                            Population: c.population ? c.population.toString() : 0
                            
                        }
                    })
                })
                res.status(201).json( await Country.findAll({include: [Activities]})
                )
            } else res.status(200).json( await Country.findAll({include: [Activities]})
            )
        } catch (e) {res.status(404).send('Can not find countries')}
    }
})



router.get('/:id', async (req, res) => {  

    const { id } = req.params;
    try {
        await Country.findAll({
            // where: { Name},
            where:{ ID: {[Op.iLike] : `%${id}%` }},
            include: [Activities]
        })
        .then((result)=> res.send(result))
    } catch (e) {
        console.log(e)
        res.send("No pasa por ID")
    }
})


module.exports = router;