const pool = require('../config/db.js');

const bookingModel = {
    async createBooking(data) {
        const { guest_id, room_id, check_in, check_out, status } = data;
        const result = await pool.query(
            `INSERT INTO bookings (guest_id, room_id, check_in, check_out, status)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [guest_id, room_id, check_in, check_out, status]
        );
        return result.rows[0];
    },

    async getBookings() {
        const result = await pool.query('SELECT * FROM bookings ORDER BY check_in DESC');
        return result.rows;
    },

    async getBookingById(id) {
        const result = await pool.query('SELECT * FROM bookings WHERE booking_id=$1', [id]);
        return result.rows[0];
    },

    async updateBooking(id, data) {
        const { guest_id, room_id, check_in, check_out, status } = data;
        const result = await pool.query(
            `UPDATE bookings
             SET guest_id=$1, room_id=$2, check_in=$3, check_out=$4, status=$5
             WHERE booking_id=$6 RETURNING *`,
            [guest_id, room_id, check_in, check_out, status, id]
        );
        return result.rows[0];
    },

    async deleteBooking(id) {
        await pool.query('DELETE FROM bookings WHERE booking_id=$1', [id]);
        return true;
    }
};

module.exports = bookingModel;
