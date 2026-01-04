const pool =require('../config/db.js');

const roomModel={
    async getRooms(){
        try{
            const results= await pool.query(
                `SELECT * FROM rooms`);
            return results
        }catch(err){
            res.status(404).json({error: err.message});
        }
    },

    async getRoomById(id){
        try{
            const results= await pool.query(`SELECT * FROM rooms WHERE id=?`, [id]);
            const room = results.rows[0]; 

            if (!room) {
            throw new Error('Room not found');
            }

            return room;
            }catch(err){
            res.status(404).json({error: err.message});
        }
    },

    async createRoom(roomData){
        try{
            const {room_number, type, price, status}=roomData;
            const results= await pool.query(
                `INSERT INTO rooms (room_number, type, price, status) VALUES (?, ?, ?, ?) RETURNING *`,
                [room_number, type, price, status]
            );
            return results
        }catch(err){
            res.status(404).json({error: err.message});
        }
    },

    async updateRoom(id, data) {
        const { room_number, room_type_id, price, capacity, status } = data;
        const result = await pool.query(
            `UPDATE rooms
             SET room_number=$1, room_type_id=$2, price=$3, capacity=$4, status=$5
             WHERE room_id=$6 RETURNING *`,
            [room_number, room_type_id, price, capacity, status, id]
        );
        return result.rows[0];
    },

    async deleteRoom(id) {
        await pool.query('DELETE FROM rooms WHERE room_id=$1', [id]);
        return true;
    }
 
}

module.exports=roomModel;