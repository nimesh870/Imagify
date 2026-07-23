const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = process.env.MONGO_IMAGE_POSTING_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Database connected successfully.")
    } catch (error) {
        console.log("Couldnot connect database.",error.message)
        process.exit(1)
    }
}

module.exports = connectDB;