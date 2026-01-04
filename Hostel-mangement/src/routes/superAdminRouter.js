const express = require('express');
const router = express.Router();
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const superAdminController = require('../controllers/superAdminController');

// Protect all routes: must be superadmin
router.use(verifyToken);
router.use(checkRole('superadmin'));

// Admin management
router.post('/admins', superAdminController.createAdmin); 
router.get('/admins', superAdminController.getAdmins);   
router.get('/admins/:id', superAdminController.getAdminById); 
router.put('/admins/:id', superAdminController.updateAdmin); 
router.delete('/admins/:id', superAdminController.deleteAdmin); 
// Staff management
router.get('/staff', superAdminController.getStaff);
router.put('/staff/:id', superAdminController.updateStaff);
router.delete('/staff/:id', superAdminController.deleteStaff);

// Hotel management
router.post('/hotels', superAdminController.createHotel);
router.get('/hotels', superAdminController.getHotels);
router.put('/hotels/:id', superAdminController.updateHotel);
router.delete('/hotels/:id', superAdminController.deleteHotel);

// Reports
router.get('/reports', superAdminController.getReports);
// User management (all types)
router.get('/users', superAdminController.getAllUsers);
router.get('/users/:id', superAdminController.getUserById);


module.exports = router;
