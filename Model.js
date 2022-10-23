const mongoose = require('mongoose')
const schema = mongoose.Schema({
    CarNumbr : Number,
    CarName  : String,
    CarPrice : Number,
    CarModel : Number
});

module.exports = mongoose.model("Model",schema,"Cars");