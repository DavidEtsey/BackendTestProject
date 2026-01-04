const pool = require('../config/db.js');

const paymentModel = {

    async createPayment(data) {
        const { booking_id, amount, method, status } = data;
        const result = await pool.query(
            `INSERT INTO payments (booking_id, amount, method, status)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [booking_id, amount, method, status]
        );
        return result.rows[0];
    },

    async getPayments() {
        const result = await pool.query(
            'SELECT * FROM payments ORDER BY created_at DESC'
        );
        return result.rows;
    },

    async getPaymentById(id) {
        const result = await pool.query(
            'SELECT * FROM payments WHERE payment_id = $1',
            [id]
        );
        return result.rows[0];
    },

    async updatePayment(id, data) {
        const { amount, method, status } = data;
        const result = await pool.query(
            `UPDATE payments
             SET amount = $1, method = $2, status = $3
             WHERE payment_id = $4
             RETURNING *`,
            [amount, method, status, id]
        );
        return result.rows[0];
    },

    async deletePayment(id) {
        await pool.query(
            'DELETE FROM payments WHERE payment_id = $1',
            [id]
        );
        return true;
    }

};

module.exports = paymentModel;
