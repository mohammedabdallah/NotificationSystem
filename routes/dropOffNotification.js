const express = require('express')
var router = express()
const notificationController = require('../controllers/notification')
const bodyparser = require('body-parser');
const schema  = require('../validations/notification')
router.use(bodyparser.json())
router.post('/notification/dropOff/send',notificationController.send)
module.exports = router
