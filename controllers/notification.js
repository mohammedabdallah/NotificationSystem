const {createTrip,sendNotifictionToUsers} = require('../services/notificationService')
async function send(req, res, next) {
    try {
        sendNotifictionToUsers();
       return createTrip(req,res);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports.send = send