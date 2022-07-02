const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model("Login", LoginSchema);
