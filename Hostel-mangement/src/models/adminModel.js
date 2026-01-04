const pool = require('../config/db.js');

const adminModel = {
    async createAdmin(data) {
        const { username, password_hash, email } = data;
        const result = await pool.query(
            `INSERT INTO admins (username, password_hash, email)
             VALUES ($1, $2, $3) RETURNING *`,
            [username, password_hash, email]
        );
        return result.rows[0];
    },

    async getAdmins() {
        const result = await pool.query('SELECT * FROM admins');
        return result.rows;
    },

    async getAdminById(id) {
        const result = await pool.query('SELECT * FROM admins WHERE admin_id = $1', [id]);
        return result.rows[0];
    },

    async updateAdmin(id, data) {
        const { username, email } = data;
        const result = await pool.query(
            `UPDATE admins SET username=$1, email=$2 WHERE admin_id=$3 RETURNING *`,
            [username, email, id]
        );
        return result.rows[0];
    },

    async deleteAdmin(id) {
        await pool.query('DELETE FROM admins WHERE admin_id=$1', [id]);
        return true;
    }
};

module.exports = adminModel;
