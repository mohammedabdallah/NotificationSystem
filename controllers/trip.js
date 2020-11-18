const Trip = require('../models/trip')
const Customer = require('../models/customer');
const { floor } = require('lodash');

async function create(req, res, next) {
    try {
        let desteinationName = req.body.desteinationName;
        //setting dropping off between 10 ~ 23 to query them later and send to customers have dropOfmin less than 15 min
        let dropOffMin = floor(Math.random() * (30 - 10) + 10);
        //get the last 4 customers from database and make them riders
        let customers = Customer.find().sort({_id:-1}).limit(4)
        console.log(customers);
        let trip = {
            desteinationName,
            dropOffMin,
        };
        const result = await Trip.create(trip);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports.create = create