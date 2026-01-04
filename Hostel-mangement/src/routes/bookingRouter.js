const router=require('express').Router();
const bookingController=require('../controllers/bookingController');
const {verifyToken,checkRole}=require('../middleware/authMiddleware');

router.use(verifyToken,checkRole('staff'));

router.post('/create',bookingController.createBooking);
router.get('/read',bookingController.getBookingById);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports=router;
