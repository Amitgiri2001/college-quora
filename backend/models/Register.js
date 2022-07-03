const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model("Register", RegisterSchema);
