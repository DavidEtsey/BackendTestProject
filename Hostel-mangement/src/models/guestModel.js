const pool =require('../config/db.js');

const guestModel = {

    async getGuests() {
        const [rows] = await pool.query("SELECT * FROM guests");
        return rows;
    },

    async getGuestById(id) {
        const [rows] = await pool.query(
            "SELECT * FROM guests WHERE id = ?", 
            [id]
        );
        return rows[0]; // avoid []
    },

    async createGuest(data) {
        const { full_name, email, phone, gender, room_id, check_in, check_out } = data;

        const [result] = await pool.query(
            `INSERT INTO guests 
            (full_name, email, phone, gender, room_id, check_in, check_out)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [full_name, email, phone, gender, room_id, check_in, check_out]
        );

        return { id: result.insertId, ...data };
    },

    async updateGuest(id, data) {
        const [result] = await pool.query(
            "UPDATE guests SET ? WHERE id = ?",
            [data, id]
        );
        return result.affectedRows;
    },

    async deleteGuest(id) {
        const [result] = await pool.query(
            "DELETE FROM guests WHERE id = ?",
            [id]
        );
        return result.affectedRows;
    }
};

module.exports = guestModel;