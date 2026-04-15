const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
})

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;