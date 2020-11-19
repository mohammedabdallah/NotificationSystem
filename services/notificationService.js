const Notification = require('../models/notification')
const Trip = require('../models/trip');

function sendNotifictionToUsers(custoemrsIDS)
{
    console.log(custoemrsIDS);
    custoemrsIDS.forEach(function(id){
        console.log("Sending Message to each rider...")
    });
}
async function createNotification(req,res)
{
    let title = req.body.title;
    let content = req.body.content;
    let message = {
        title,
        content
    };
    //wait untile service create the notification document then we will call notficiation function
    let result = await Notification.create(message);
    let customersIDS = await getSemiEndedTripes();
    attachCustomersToTheCreatedNotficiation(customersIDS,result);
    sendNotifictionToUsers(customersIDS);
    return res.status(200).json(result);
}
async function getSemiEndedTripes()
{
    return  Trip.find({dropOffMin:{$lt:15}}).select({_id:1});
}
function attachCustomersToTheCreatedNotficiation(ids,notification)
{
    return ids.forEach(function(id){
        notification.receiversIDs.push(id);
        notification.save();
    })
}
module.exports = {
    createNotification,
    sendNotifictionToUsers
}