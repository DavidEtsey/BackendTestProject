const paymentModel = require('../models/paymentModel.js');

const paymentController = {

    async createPayment(req, res) {
        try {
            const payment = await paymentModel.createPayment(req.body);
            res.status(201).json(payment);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getPayments(req, res) {
        try {
            const payments = await paymentModel.getPayments();
            res.json(payments);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getPaymentById(req, res) {
        try {
            const payment = await paymentModel.getPaymentById(req.params.id);
            res.json(payment);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async updatePayment(req, res) {
        try {
            const updated = await paymentModel.updatePayment(
                req.params.id,
                req.body
            );
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deletePayment(req, res) {
        try {
            await paymentModel.deletePayment(req.params.id);
            res.json({ message: 'Payment deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

};

module.exports = paymentController;
