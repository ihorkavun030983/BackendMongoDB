const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    price: Number,
    gender: String,
    sellingPrice: Number,
    quantity: Number

})


const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel