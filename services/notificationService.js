const Notification = require('../models/notification')
const Trip = require('../models/trip');

async function sendNotifictionToUsers()
{
    let result = getSemiEndedTripes();
    console.log(result.count());
}
async function createTrip(req,res)
{
    let title = req.body.title;
    let content = req.body.content;
    let message = {
        title,
        content
    };
    let result = await Notification.create(message);
    return res.status(200).json(result);
}
function getSemiEndedTripes()
{
    return Trip.find({dropOffMin:{$lt:15}});
}
module.exports = {
    createTrip,
    sendNotifictionToUsers
}