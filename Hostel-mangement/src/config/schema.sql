
const userTable = `
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) 
        CHECK (role IN ('superAdmin','admin','staff','guest'))
        DEFAULT 'guest',
    is_active BOOLEAN DEFAULT TRUE,      -- active / inactive
    is_deleted BOOLEAN DEFAULT FALSE,    -- soft delete
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);`;



const roomTable = `
    CREATE TABLE IF NOT EXISTS rooms (
    id SERIAL PRIMARY KEY,

    room_number VARCHAR(20) UNIQUE NOT NULL,
    type VARCHAR(50) NOT NULL,              -- single, double, dorm
    capacity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL,

    is_available BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,          -- disable room without deleting
    is_maintenance BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
`;

const guestTable = `
CREATE TABLE IF NOT EXISTS guests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;


module.exports = {
    userTable,
    roomTable,
    guestTable
};