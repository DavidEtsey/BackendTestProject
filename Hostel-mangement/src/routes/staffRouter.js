const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController.js');
const { verifyToken, checkRole } = require('../middleware/authMiddleware.js');

router.use(verifyToken);
router.use(checkRole('staff')); // Admin manages staff

router.post('/', staffController.createStaff);
router.get('/', staffController.getStaff);
router.get('/:id', staffController.getStaffById);
router.put('/:id', staffController.updateStaff);
router.delete('/:id', staffController.deleteStaff);

module.exports = router;
