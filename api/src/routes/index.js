const express = require('express');
// Import all routers;
const champsRouter = require('./champs.js');
const usersRouter = require('./users.js');
const loginRouter = require('./Login/login.js');

const router = express.Router();

// Setting routers
router.use('/champs', champsRouter);
router.use('/users', usersRouter);
router.use('/login', loginRouter);

module.exports = router;