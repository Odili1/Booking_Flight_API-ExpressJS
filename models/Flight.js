const {Schema, model} = require('mongoose');


const flightSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {timestamps: true});


const flightModel = model('flight', flightSchema);

module.exports = flightModel;