const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    token: { type: String },
});
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
