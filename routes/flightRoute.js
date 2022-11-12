const express = require('express');
const controller = require('../controllers/flightController');

const router = express.Router();


const flightRouter = router
.post('/', controller.bookFlight)
.get('/', controller.getAllFlights)
.get('/:id', controller.getAFlight)
.put('/:id', controller.updateFlight)
.delete('/:id', controller.deleteFlight)

module.exports = flightRouter;

