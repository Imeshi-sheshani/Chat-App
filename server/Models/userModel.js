const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength:3,maxlength:30}
})