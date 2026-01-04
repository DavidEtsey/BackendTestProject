const adminModel = require('../models/adminModel');

const adminController = {
    async createAdmin(req, res) {
        try {
            const admin = await adminModel.createAdmin(req.body);
            res.status(201).json(admin);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getAdmins(req, res) {
        try {
            const admins = await adminModel.getAdmins();
            res.json(admins);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getAdminById(req, res) {
        try {
            const admin = await adminModel.getAdminById(req.params.id);
            res.json(admin);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async updateAdmin(req, res) {
        try {
            const updated = await adminModel.updateAdmin(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deleteAdmin(req, res) {
        try {
            await adminModel.deleteAdmin(req.params.id);
            res.json({ message: 'Admin deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = adminController;
