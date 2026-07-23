const app = require('./src/app')
require('dotenv').config()
const connectDB = require('./src/database/database')

connectDB()

const PORT  = process.env.PORT

app.listen(PORT , () => {
    console.log(`App running on port ${PORT}`)
})