const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const notificationSchema = new mongoose.Schema({
    receiversIDs: [{


        type: mongoose.Schema.Types.ObjectId,
        ref: "notification"
    }],
    title: { type: String, required: true},
    content: { type: String, required: true },
});
notificationSchema.plugin(uniqueValidator);
const notification = mongoose.model("notification", notificationSchema);
module.exports = notification;
