const express = require('express')
var router = express()
const email = require('../Controllers/email')
router.post('/customer/sendEmail',email.sendEmail)
module.exports = router
