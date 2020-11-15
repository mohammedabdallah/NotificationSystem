const Customer = require('../models/customer')
function create(req, res, next) {
    let name = req.body.name;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let customer = new Customer({
        name,
        mobile,
        email
    })
    customer.save().then((data) => {
        res.send(data)
    })
}
module.exports.create = create