const express = require('express')
var router = express()
const create = require('../Controllers/customer')
const bodyparser = require('body-parser');
router.use(bodyparser.json())
router.post('api/customer/create',create.create)
module.exports = router