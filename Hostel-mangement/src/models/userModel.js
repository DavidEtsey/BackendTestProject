const db = require('../config/db.js');

const userModel = {

    
    async createUser({ username, password_hash, role, status = 'active' }) {
        const query = `
            INSERT INTO users (username, password_hash, role, status)
            VALUES ($1, $2, $3, $4)
            RETURNING user_id, username, role, status, created_at
        `;
        const values = [username, password_hash, role, status];

        const { rows } = await db.query(query, values);
        return rows[0];
    },

    
    async findByUsername(username) {
        const query = `
            SELECT * FROM users
            WHERE username = $1
        `;
        const { rows } = await db.query(query, [username]);
        return rows[0];
    },

   
    async findById(user_id) {
        const query = `
            SELECT user_id, username, role, status, created_at
            FROM users
            WHERE user_id = $1
        `;
        const { rows } = await db.query(query, [user_id]);
        return rows[0];
    },

    
    async getAllUsers() {
        const query = `
            SELECT user_id, username, role, status, created_at
            FROM users
            ORDER BY created_at DESC
        `;
        const { rows } = await db.query(query);
        return rows;
    },

    
    async updateUser(user_id, { role, status }) {
        const query = `
            UPDATE users
            SET role = $1, status = $2
            WHERE user_id = $3
            RETURNING user_id, username, role, status
        `;
        const values = [role, status, user_id];

        const { rows } = await db.query(query, values);
        return rows[0];
    },

    
    async deleteUser(user_id) {
        const query = `
            DELETE FROM users
            WHERE user_id = $1
            RETURNING user_id
        `;
        const { rows } = await db.query(query, [user_id]);
        return rows[0];
    }
};

module.exports = userModel;
