const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    UserEmail: {type: String},
    Name: {type: String, unique: true},
    CreationDate: {type: Date, default: Date.now()}
})

const BrandsModel = mongoose.model('brands', DataSchema)
module.exports = BrandsModel