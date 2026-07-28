const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : [true ,' username must be unique'],
        minlength : [4 , "username must contain atleast 4 characters"]
    },

    email : {
        required : true,
        unique : [true , "email must be unique."],
        type : String
    },

    password : {
        required : true,
        type : String,
        minlength : [6 , "Password must contain atleast 6 letters"]
    }
})

userSchema.methods.toJSON = function () {
    user = this.toObject()
    if (user) {
        delete user.password
    }
    return user;
}

const authModel = Mongoose.model('auth' , userSchema);
module.exports = authModel;