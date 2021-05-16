const router = require ('express').Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountryRoutes = require('./country.js');
const ActivitiesRoutes = require('./activities.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', CountryRoutes);
router.use('/activities', ActivitiesRoutes);


module.exports = router;
