const express = require('express')
var router = express()
const cusotmerController = require('../Controllers/customer')
const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('/api/customer/create', cusotmerController.create)
module.exports = router
