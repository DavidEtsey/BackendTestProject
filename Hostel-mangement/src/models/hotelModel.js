const pool = require('../config/db.js');

const hotelModel = {

    async createHotel(data) {
        const { name, location, total_rooms } = data;
        const result = await pool.query(
            `INSERT INTO hotels (name, location, total_rooms) 
             VALUES ($1, $2, $3) RETURNING *`,
            [name, location, total_rooms]
        );
        return result.rows[0];
    },

    async getHotels() {
        const result = await pool.query('SELECT * FROM hotels');
        return result.rows;
    },

    async getHotelById(id) {
        const result = await pool.query('SELECT * FROM hotels WHERE hotel_id = $1', [id]);
        return result.rows[0];
    },

    async updateHotel(id, data) {
        const { name, location, total_rooms } = data;
        const result = await pool.query(
            `UPDATE hotels 
             SET name = $1, location = $2, total_rooms = $3 
             WHERE hotel_id = $4 
             RETURNING *`,
            [name, location, total_rooms, id]
        );
        return result.rows[0];
    },

    async deleteHotel(id) {
        await pool.query('DELETE FROM hotels WHERE hotel_id = $1', [id]);
        return true;
    },

};

module.exports = hotelModel;
