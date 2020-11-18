const Customer = require('../models/customer')
async function create(req, res, next) {
    try {
        let name = req.body.name;
        let mobile = req.body.mobile;
        let email = req.body.email;
        let customer = {
            name,
            mobile,
            email
        };
        const result = await Customer.create(customer);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports.create = create