const express = require('express')
const router = express.Router();

const { Activities, Country} = require('../db.js');



router.post('/', async (req, res) => {

    var {name, challenge, duration, season, countries } = req.body

    const newActivity = await Activities.create({
        name,
        challenge,
        duration,
        season
    })
    countries.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { ID: pais }
        })
        await newActivity.addCountry(country)
    })
    res.status(201).send('Actividad asociada correctamente!')
   
})

router.get('/activities', async (req, res) => {
    var activities = await Activities.findAll();

    res.json(activities);
})

module.exports = router;