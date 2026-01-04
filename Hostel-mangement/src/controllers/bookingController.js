const bookingModel = require('../models/bookingModel.js');

const bookingController = {
    async createBooking(req, res) {
        try {
            const booking = await bookingModel.createBooking(req.body);
            res.status(201).json(booking);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getBookings(req, res) {
        try {
            const bookings = await bookingModel.getBookings();
            res.json(bookings);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getBookingById(req, res) {
        try {
            const booking = await bookingModel.getBookingById(req.params.id);
            res.json(booking);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async updateBooking(req, res) {
        try {
            const updated = await bookingModel.updateBooking(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deleteBooking(req, res) {
        try {
            await bookingModel.deleteBooking(req.params.id);
            res.json({ message: 'Booking deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = bookingController;
