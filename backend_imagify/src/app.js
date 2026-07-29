const express = require('express');
const multer = require('multer');
const uploadImgFile = require('./services/storage.services')
const postModel = require('./models/post.models')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')

const app = express();

app.use(cors({
    origin: "https://imagyfy.netlify.app",
    credentials: true
}))

app.use(express.json())

app.use(cookieParser())

app.use('/api/auth' , authRoutes)

const upload = multer({storage : multer.memoryStorage()}) // keeps incoming raw image bytes in RAM as a Buffer

app.post('/create-post' , upload.single("imgURI") , async (req , res) => {
    try {
        const {imgURI , caption} = req.body;

        if (!caption) {
            return res.status(400).json({
                error : "Caption is required."
            })
        }

        const response = await uploadImgFile(req.file.buffer)
        
        if (response) {
            const createPost = await postModel.create({
                imgURI : response.url,
                caption
            })

            res.status(201).json({
                message : "Post created successfully.",
            })
        }


    } catch (error) {
        res.status(500).json({
            error : "Cannot upload post.",
            details : error.message
        })
    }
})

app.get('/feed' , async(req , res) => {
    try {
        const data = await postModel.find()

        if (data.length === 0) {
            return res.status(200).json({
                error : "No data found.",
                data : []
            })
        }

        if (data) {
            return res.status(200).json({
                message : "Data Fetched.",
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            error : "Cannot fetch data.",
            details : error.message
        })
    }
})

module.exports = app;