const express = require('express')
var router = express()
const trip = require('../controllers/trip')
const validationMiddleware = require('../middleware/customer-validation-middleware');
const tripSchema  = require('../validations/trip')

router.post('/trip/create',validationMiddleware(tripSchema),trip.create)
module.exports = router
