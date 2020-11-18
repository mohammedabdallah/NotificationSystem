const express = require('express')
var router = express()
const email = require('../controllers/email')
const validationMiddleware = require('../middleware/customer-validation-middleware');

router.post('/customer/sendEmail',email.sendEmail)
module.exports = router
