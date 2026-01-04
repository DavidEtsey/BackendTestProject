require('dotenv').config();

const pool = require('../src/config/db.js');
const { userTable,roomTable, guestTable } = require('../src/config/schema.sql');

async function createTables() {
    try {
        await pool.query(userTable);
        console.log('Users table created successfully');

        await pool.query(roomTable);
        console.log('Rooms table created successfully');

        await pool.query(guestTable);
        console.log('Guests table created successfully');
    } catch (err) {
        console.error('Error creating tables:', err.message);
    } finally {
        await pool.end(); // close the connection
    }
}

module.exports = {
    createTables
};
