const {createNotification} = require('../services/notificationService')
async function send(req, res, next) {
    try {
       return createNotification(req,res);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports.send = send