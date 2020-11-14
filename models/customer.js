const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: { type: String },
    mobile: { type: String },
    email: { type: String },
    token: { type: String },
});
const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
