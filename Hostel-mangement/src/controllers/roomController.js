const roomModel=require('../models/roomModel.js');

const roomController={
    async getRooms(req,res){
        try{
            const rooms=await roomModel.getRooms()
            res.json(rooms);
        }catch(err){
            res.status(404).json({error: err.message});
        }
    
    },
    
    async getRoomById(req,res){
        try{
            const RoomById=await roomModel.getRoomById(req.params.id);
            res.json(RoomById);
        }catch(err){
            res.status(404).json({error: err.message});
        }
    },

    async createRoom(req,res){
        try{
            const createRoom=await roomModel.createRoom(req.body)
            res.json(createRoom);
        }catch(err){
            res.status(404).json({error: err.message});
        }
    },

    async updateRoom(req, res) {
        try {
            const updated = await roomModel.updateRoom(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deleteRoom(req, res) {
        try {
            await roomModel.deleteRoom(req.params.id);
            res.json({ message: 'Room deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    
}

module.exports=roomController;