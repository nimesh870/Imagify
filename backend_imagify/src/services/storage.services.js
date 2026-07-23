const Imagekit = require("@imagekit/nodejs")
require('dotenv').config()

const client = new Imagekit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
})

const uploadImgFile = async (buffer) => {
    const response = await client.files.upload({
        file : buffer.toString("base64"), // imagekit doesnot accept raw binary bytes, it accepts image encoded as base64 string
        fileName : "image.jpg"
    })

    return response
}

module.exports = uploadImgFile;