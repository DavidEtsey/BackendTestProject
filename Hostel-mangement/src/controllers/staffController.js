const staffModel = require('../models/staffModel.js');

const staffController = {
    async createStaff(req, res) {
        try {
            const staff = await staffModel.createStaff(req.body);
            res.status(201).json(staff);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getStaff(req, res) {
        try {
            const staff = await staffModel.getStaff();
            res.json(staff);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getStaffById(req, res) {
        try {
            const staff = await staffModel.getStaffById(req.params.id);
            res.json(staff);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async updateStaff(req, res) {
        try {
            const updated = await staffModel.updateStaff(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deleteStaff(req, res) {
        try {
            await staffModel.deleteStaff(req.params.id);
            res.json({ message: 'Staff deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = staffController;
