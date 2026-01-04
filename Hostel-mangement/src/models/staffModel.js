const pool = require('../config/db.js'); 

const staffModel = {

    async getStaff() {
        const result = await pool.query('SELECT * FROM staff');
        return result.rows;
    },

    async getStaffById(id) {
        const result = await pool.query('SELECT * FROM staff WHERE staff_id = $1', [id]);
        return result.rows[0];
    },

    async updateStaff(id, data) {
        const { first_name, last_name, email, phone } = data;
        const result = await pool.query(
            `UPDATE staff 
             SET first_name = $1, last_name = $2, email = $3, phone = $4 
             WHERE staff_id = $5 
             RETURNING *`,
            [first_name, last_name, email, phone, id]
        );
        return result.rows[0];
    },

    async deleteStaff(id) {
        await pool.query('DELETE FROM staff WHERE staff_id = $1', [id]);
        return true;
    },

};

module.exports = staffModel;
