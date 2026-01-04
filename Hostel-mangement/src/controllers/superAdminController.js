const adminModel = require('../models/adminModel');
const staffModel = require('../models/staffModel');
const hotelModel = require('../models/hotelModel');
const userModel = require('../models/userModel');
const reportModel = require('../models/reportModel');

const superadminController = {

    // Admin Management
    
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
    },

    // ==========================
    // Staff Management
    // ==========================
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
    },

    // ==========================
    // Hotel Management
    // ==========================
    async createHotel(req, res) {
        try {
            const hotel = await hotelModel.createHotel(req.body);
            res.status(201).json(hotel);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getHotels(req, res) {
        try {
            const hotels = await hotelModel.getHotels();
            res.json(hotels);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getHotelById(req, res) {
        try {
            const hotel = await hotelModel.getHotelById(req.params.id);
            res.json(hotel);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async updateHotel(req, res) {
        try {
            const updated = await hotelModel.updateHotel(req.params.id, req.body);
            res.json(updated);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deleteHotel(req, res) {
        try {
            await hotelModel.deleteHotel(req.params.id);
            res.json({ message: 'Hotel deleted successfully' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // ==========================
    // Reports
    // ==========================
    async getReports(req, res) {
        try {
            const reports = await reportModel.getAllReports();
            res.json(reports);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getReportById(req, res) {
        try {
            const report = await reportModel.getReportById(req.params.id);
            res.json(report);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    // ==========================
    // All Users Management
    // ==========================
    async getAllUsers(req, res) {
        try {
            const users = await userModel.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getUserById(req, res) {
        try {
            const user = await userModel.getUserById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

};

module.exports = superadminController;
