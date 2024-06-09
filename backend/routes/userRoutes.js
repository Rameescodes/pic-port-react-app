const express = require('express')
const bcrypt = require('bcryptjs');
const router = express.Router();
// auth middleware
const { protect} = require ("../middleWare/authMiddleware")
//controllers

const { registerUser,
    verifyOtp,
    googleAuth,
    loginUser,      
    resendOtp,
    forgotPassword,  
    searchedUser,
    resetPassword,
    getUserDetails,
    editProfile,
    userSuggestions,
    forgotPasswordOtp


} = require("../controllers/userControllers")

const {registerValidation,otpValidation,userLoginValidation} = require("../validations/userValidation"); 

router.post('/register',registerValidation,registerUser)
router.post('/register-otp',otpValidation,verifyOtp)
router.post('/resend-otp',resendOtp)
router.post('/google-auth', googleAuth)
router.post('/login',userLoginValidation,loginUser)
router.post ('/forgot-password',forgotPassword)
router.post('/forgot-otp', forgotPasswordOtp)

router.post('/search-users', searchedUser)
router.post('/reset-password', resetPassword)
router.get('/user-details/:userId', getUserDetails)
router.patch('/edit-profile', editProfile)
router.post("/user-suggestions",userSuggestions);







module.exports = router





