const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique:true},
    email: { type: String, required: true, unique:true },
    token: { type: String },
});
customerSchema.plugin(uniqueValidator);
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
