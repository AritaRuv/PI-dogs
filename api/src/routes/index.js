const { Router } = require('express');
const DogsRouter = require('./DogsRoutes.js');
const TemperamentsRouter = require('./TemperamentsRoutes.js');
const DogRouter = require('./DogRoutes.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/dogs', DogsRouter)
mainRouter.use('/temperaments', TemperamentsRouter)
mainRouter.use('/dog', DogRouter)


module.exports = mainRouter;
