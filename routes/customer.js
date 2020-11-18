const express = require('express')
var router = express()
const cusotmerController = require('../controllers/customer')
const validationMiddleware = require('../middleware/customer-validation-middleware');
const bodyparser = require('body-parser');
const schema  = require('../validations/schema')
router.use(bodyparser.json())
router.post('/customer/create', validationMiddleware(schema),cusotmerController.create)
module.exports = router
