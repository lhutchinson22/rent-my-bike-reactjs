const mongoose = require("mongoose");


const transactionSchema = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true,
    },
    bikeId: {
        type: String,
        required: true,
    },
    renterId: {
        type: String,
        required: true,
    },
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;