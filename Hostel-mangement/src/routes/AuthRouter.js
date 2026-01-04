const express=require('express');
const Router=express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const AuthController=require('../controllers/AuthController.js');

Router.post('/signUp',AuthController.userSignUp);
Router.post('/signIn',AuthController.userSignIn);

module.exports = Router;