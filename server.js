const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');

const bodyParser = require('body-parser');

const app = express();

const mongoosee = require("mongoose");
var url = "mongodb://localhost:27017/notificationSys";

mongoosee.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

app.listen(3000, () => {
    console.log("The project is running")
});

const router = require('./routes/customer')
app.use('/',router)

