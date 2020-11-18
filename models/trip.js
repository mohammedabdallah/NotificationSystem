const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    desteinationName: { type: String, required: true },
    dropOffMin: { type: Number, required: true },
    customers:
        [
            {


                type: mongoose.Schema.Types.ObjectId,
                ref: "Customer"
            }
        ],
});

const Trip = mongoose.model("trip", TripSchema);
module.exports = Trip;
