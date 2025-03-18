const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    mail: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);
