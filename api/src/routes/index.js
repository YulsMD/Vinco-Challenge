const express = require('express');
// Import all routers;
const champsRouter = require('./champs.js');

const router = express.Router();

// Setting routers
router.use('/champs', champsRouter);

module.exports = router;