const jwt = require('jsonwebtoken')
require('dotenv').config()
const authModel = require('../models/auth.models')
const bcrypt = require('bcrypt')

const jwtSecretKey = process.env.JWT_SECRET

const registerUser = async (req , res) => {
    try {
        const {username , email , password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                error : "You must fill all the fields."
            })
        }

        const existingUserWithEmail = await authModel.find({email})

        if (existingUserWithhEmail) {
            return res.status(409).json({
                error : "Email already in use."
            })
        }

        const existingUserWithUsername = await authModel.find({username})

        if (existingUserWithUsername) {
            return res.status(409).json({
                error : "Username already in use."
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        const createUser = await authModel.create({
            username,
            email,
            password : hashedPassword
        })

        const token = jwt.sign({
            id : createUser._id
        } , jwtSecretKey , {expiresIn : "7d"})

        res.cookies("token" , token , {
            httpOnly : true
        })

        res.status(201).json({
            message : "User registered.",
            createUser,
            token
        })

    } catch (error) {
        res.status(500).json({
            error : "Cannot register user.",
            details : error.message
        })
    }
}

const loginUser = async (req , res) => {
    try {
        const {email , password} = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error : "Email or password must be entered."
            })
        }

        const user = await authModel.find({email})

        if (!user) {
            return res.status(401).json({
                error : "Invalid credentials."
            })
        }

        const comparePassword = await bcrypt.compare(password  , user.password)

        if (!comparePassword) {
            return res.status(401).json({
                error : "Invalid credentials."
            })
        }

        const token = jwt.sign({
            id : user._id
        } , jwtSecretKey , {expiresIn : "7d"})

        res.cookies("token" , token , {
            httpOnly : true
        })

        res.status(200).json({
            message : "Login successfully.",
            token,
            user
        })


    } catch (error) {
        res.status(500).json({
            error : "Unable to login.",
            details : error.message
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}