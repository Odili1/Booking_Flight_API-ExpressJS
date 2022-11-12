const Booking = require('../models/Flight');

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

// Add/Book Flight
exports.bookFlight = async(req, res) => {
    try {
        let book = await req.body;
        let bookflight = await Booking.create(book);

        if(!bookflight){
            return res.status(404).json({
                success: false,
                message: 'Flight not Booked'
            })
        }

        return res.status(202).json({
            success: true,
            message: 'Flight Booked Successfully',
            flight: bookflight
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
        
    }
}
// !

// Get all Flight
exports.getAllFlights = async(req, res) =>{
    try {
        let flights = await Booking.find();
        if (flight.length === 0){
            return res.status(404).json({
                success: false,
                message: 'Flights not found'
            })
        } 

        return res.status(200).json({
            success: true,
            message: 'Flights found',
            flights,
            count: flights.length
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

// Get Single Flight
exports.getAFlight = async(req, res) => {
    try {
        let id = {_id: req.params.id};
        let flight = await Booking.findOne(id);

        if(!flight){
            return res.status(404).json({
                success: false,
                message: 'Flight not found'
            })
        };

        return res.status(200).json({
            success: true,
            message: 'Flight found',
            flight
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Issue',
            error: error.message
        })
    }
}



// Update/Edit Flight
exports.updateFlight = async(req, res) => {
    try {
        let id = {_id: req.params.id};
        let flight = await req.body
        let update = await Booking.findOneAndUpdate(id, flight, {new: true});

        if (!update){
            return res.status(404).json({
                success: false,
                message: 'Failed to Update',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Flight Updated',
            flight: update
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}


// Delete Flight
exports.deleteFlight = async(req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await Booking.findOneAndRemove(id);

        if (!deleted){
            return res.status(404).json({
                success: false,
                message: 'Flight not deleted'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Flight deleted',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

