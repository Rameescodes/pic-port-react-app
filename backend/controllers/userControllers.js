//module exports
const asyncHandler = require('express-async-handler');
const speakeasy = require('speakeasy')
const bcrypt = require('bcryptjs');

//!models
const User = require('../models/userModel')

//connectionModel
const Connections = require('../models/connectionModel')

// helpers import

const generateToken = require("../utils/generateToken")
const sendMail = require("../utils/sendMail")

//! register new user
//? post/register
//* public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    // Generate OTP using Speakeasy
    const otp = speakeasy.totp({
        secret: speakeasy.generateSecret({ length: 20 }).base32,
        digits: 4
    })

    const sessionData = req.session
    sessionData.userDetails = { username, email, password }
    sessionData.otp = otp
    sessionData.otpGeneratedTime = Date.now()
    console.log(sessionData.otp)

    // hashpassword
    const passwordHash = await bcrypt.hash(password, 10)
    sessionData.userDetails.password = passwordHash
    sendMail(req, username, email)
    res.status(200).json({ message: "otp sent", email })
})

// ! Register OTP Verification
// ? POST /register-otp
// * Public
const verifyOtp = asyncHandler(async (req, res) => {
    const { otp } = req.body;
console.log(otp)
    const sessionData = req.session;

    const storedOTP = sessionData.otp;
    if (!storedOTP || otp !== storedOTP) {
        res.status(400);
        throw new Error("Invalid OTP");
    }
    const otpGeneratedTime = sessionData.otpGeneratedTime || 0;
    const currentTime = Date.now();
    const otpExpirationTime = 60 * 1000;
    if (currentTime - otpGeneratedTime > otpExpirationTime) {
        res.status(400);
        throw new Error("OTP has expired");
    }

    const userDetails = sessionData.userDetails;
    if (!userDetails) {
        res.status(400);
        throw new Error("User details not found in session");
    }
    const user = await User.create({
        name: userDetails.username,
        email: userDetails.email,
        password: userDetails.password,
    });

    await Connections.create({
        userId: user._id
    })

    delete sessionData.userDetails;
    delete sessionData.otp;
    delete sessionData.otpGeneratedTime;

    res.status(200).json({ message: "OTP verified, user created", user });
});

// ResendOtp //
//* public //

const resendOtp = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const otp = speakeasy.totp({
        secret: speakeasy.generateSecret({ length: 20 }).base32,
        digit: 4,
    });

    const sessionData = req.session;
    sessionData.otp = otp;
    sessionData.otpGeneratedTime = Data.now();

    const userDetails = sessionData.userDetails;
    if (!userDetails) {
        res.status(400);
        throw new Error("user details not found in session");

    }
    console.log(otp)
    sendVerifyMail(req, userDetails.userName, userDetails.email);
    res.status(200).json({ message: "OTP sent for verification", email });

});

// ! Google Authentication
// ? POST /google-auth
// * Public

const googleAuth = asyncHandler(async (req, res) => {
    try {
        const { username, email, imageUrl } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            if (userExist.isBlocked) {
                res.status(400);
                throw new Error("User is blocked");
            }

            if (userExist.isGoogle) {
                res.json({
                    message: "Login Successful",
                    _id: userExist.id,
                    username: userExist.name,
                    email: userExist.email,
                    profileImg: userExist.profileImg,
                    savedPost: userExist.savedPost,
                    bio: userExist.bio,
                    phone: userExist.phone,
                    isPrivate: userExist.isPrivate,
                    isVerified: userExist.isVerified,
                    token: generateToken(userExist.id),
                });
                return;
            } else {
                res.status(400);
                throw new Error(
                    "User already Exist with that email. Try a differeny email"
                );
            }
        }

        const randomPassword = Math.random().toString(36).slice(-8);

        const hashedPassword = await bcrypt.hash(randomPassword, 10);

        const newUser = await User.create({
            name: username,
            email,
            password: hashedPassword,
            profileImg: imageUrl,
            isGoogle: true,
        });

        await Connections.create({
            userId: newUser._id
        })

        const token = generateToken(newUser.id);

        res.status(200).json({
            message: "Login Successful",
            _id: newUser.id,
            username: newUser.name,
            email: newUser.email,
            profileImg: newUser.profileImg,
            savedPost: newUser.savedPost,
            bio: newUser.bio,
            phone: newUser.phone,
            isPrivate: newUser.isPrivate,
            isVerified: newUser.isVerified,
            token: token,
        });
    } catch (error) {
        console.error("Error in Google authentication:", error);
        res.status(500).json({ message: "Server error" });
    }
});
// ! User Login
// ? POST /login
// * Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            message: "Login Successfull",
            _id: user.id,
            username: user.name,
            email: user.email,
            profileImg: user.profileImg,
            savedPost: user.savedPost,
            bio: user.bio,
            phone: user.phone,
            isPrivate: user.isPrivate,
            isVerified: user.isVerified,
            token: generateToken(user.id),

        });
    } else {
        res.status(400);
        throw new Error("Invalid Credential");
    }
});
// ! forgot password
// ? POST /forgot-password
// * public

const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })


    if (!user) {
        res.status(400)
        throw new Error('user not found')
    }

    const otp = speakeasy.totp({
        secret: speakeasy.generateSecret({ length: 20 }).base32,
        digits: 4
    })

    const sessionData = req.session
    sessionData.otp = otp
    sessionData.otpGeneratedTime = Date.now()
    sessionData.email = email
    sendMail(req, user.username, user.email)
    console.log('otp is = ', otp);

    res.status(200).json({ message: "otp sent", email })
})

// ! forgot password otp verification
// ? POST /forgot-otp
// * public

const forgotPasswordOtp = asyncHandler(async (req, res) => {
    const { otp } = req.body

    if (!otp) {
        res.status(400)
        throw new Error('provide an otp')
    }
    const sessionData = req.session
    const storedOTP = sessionData.otp

    if (!storedOTP || otp !== storedOTP) {
        res.status(400)
        throw new Error('invalid otp')
    }
    const otpGeneratedTime = sessionData.otpExpirationTime || 0
    const currentTime = Data.now()
    const otpExpirationTime = 60 * 1000;
    if (currentTime - otpGeneratedTime > otpExpirationTime) {
        res.status(400)
        throw new Error('otp expired')
    }

    delete sessionData.otp
    delete sessionData.otpGeneratedTime

    res.status(200).json({
        message: "otp has beem verified , reset password",
        email: sessionData?.email
    })

})

// ! rest password
// ? POST /reset-password
// * public

const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;

    const sessionData = req.session
    const email = sessionData.email
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400);
        throw new Error("User Not Found");
    }
    //?hash password

    const passwordHash = await bcrypt.hash(password, 10);
    user.password = passwordHash
    await user.save()

    res.status(200).json({ messge: "password reseted successfully" })

})

// ! get user details
// ? GET /user-details

const getUserDetails = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId)
    // const connection = await connection.findOne({ userId })
    if( user ) {
        res.status(200).json({ user })
    } else {
        res.status(404)
        throw new Error("user not found")
    }
})

// ! edit profile
// ? PATCH /edit-profile

const editProfile = asyncHandler(async (req, res) => {
    const { userId, image, name, phone, bio, isPrivate } = req.body;
    const user = await User.findById(userId)
    if (!user) {
        res.status(404)
        throw new Error("user not found")
    }

    if (name) user.name = name
    if (image) user.profileImg = image
    if (phone) user.phone = phone
    if (bio) user.bio = bio
    if (isPrivate !== undefined) user.isPrivate = isPrivate


    await user.save();


    res.status(200).json({
        _id: user.id,
        username: user.name,
        email: user.email,
        profileImg: user.profileImg,
        savedPost: user.savedPost,
        bio: user.bio,
        phone: user.phone,
        isPrivate: user.isPrivate,
        isVerified: user.isVerified,
        token: generateToken(user.id)
    })
})

// ! search users
// ? POST /search-users
const searchedUser = asyncHandler(async (req, res) => {
    const users = await User.find({}, { name: 1, profileImg: 1 });
    res.status(200).json({ users })

})
// ! get user suggestion
// ? GET /get-suggestions
const userSuggestions = asyncHandler(async (req, res) => {
    const { userId, searchTerm } = req.body;

    const connection = await Connections.findOne({ userId });
    if (!connection || (connection?.followers.length === 0 && connection?.following.length === 0)) {
        let users;
        if (!searchTerm) {
            users = await User.find({ _id: { $ne: userId } });
        } else {
            users = await User.find({
                userName: { $regex: searchTerm, $options: "i" },
                _id: { $ne: userId },
            });
        }
        res.status(200).json({ suggestedUsers: users });
        return;
    }

    const followingIds = connection.following.map((user) => user._id);
    const requestedIds = connection.requestSent.map((user) => user._id);

    let suggestedUsers;
    if (searchTerm) {
        suggestedUsers = await User.find({
            userName: { $regex: searchTerm, $options: "i" },
            isBlocked: false,
        }).limit(6).sort({ isVerified: -1 });
    } else {
        suggestedUsers = await User.find({
            _id: { $nin: [...followingIds, ...requestedIds, userId] },
        }).limit(6).sort({ isVerified: -1 });
    }

    res.status(200).json({ suggestedUsers });

})

module.exports = {
    registerUser,
    verifyOtp,
    resendOtp,
    googleAuth,
    loginUser,
    forgotPassword,
    forgotPasswordOtp,
    resetPassword,
    getUserDetails,
    editProfile,
    searchedUser,
    userSuggestions
}






