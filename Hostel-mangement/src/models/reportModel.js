const pool = require('../config/db.js');

const reportModel = {

    async getAllReports() {
        const result = await pool.query('SELECT * FROM reports ORDER BY created_at DESC');
        return result.rows;
    },

    async getReportById(id) {
        const result = await pool.query('SELECT * FROM reports WHERE report_id = $1', [id]);
        return result.rows[0];
    },

    async createReport(data) {
        const { title, description, type } = data;
        const result = await pool.query(
            `INSERT INTO reports (title, description, type) 
             VALUES ($1, $2, $3) RETURNING *`,
            [title, description, type]
        );
        return result.rows[0];
    },

};

module.exports = reportModel;
