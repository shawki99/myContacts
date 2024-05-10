const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel")

//@desc Resgister a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) =>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("ALL fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("Email is already registered");
    }

// Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })
    res.json({message: "registered the user"});
});


//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) =>{
    res.json({message: "login the user"})
});



//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) =>{
    res.json({message: "Current user information"})
});

module.exports = {registerUser, loginUser,currentUser};