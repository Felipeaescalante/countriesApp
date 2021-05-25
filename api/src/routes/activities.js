const express = require('express')
const router = express.Router();

const { Activities, Country} = require('../db.js');



router.post('/', async (req, res) => {

    var {Name, Challenge, Duration, Season, Countries } = req.body

    const newActivity = await Activities.create({
        Name,
        Challenge,
        Duration,
        Season
    })
    Countries.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { ID: pais }
        })
        await newActivity.addCountry(country)
    })
    res.status(201).send('Actividad asociada correctamente!')
   
})

router.get('/', async (req, res) => {
    var activities = await Activities.findAll();

    res.json(activities);
})



module.exports = router;