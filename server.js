const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/notificationSys";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
    db.close();
});

app.listen(3000, () => {
    console.log("The project is running")
});

const router = require('./routes/customer')
app.use('/', router)

