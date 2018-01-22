const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name : String,
  price: Number,
  description: String,
  codeItem : String,
  image : String,
  stock : Number
})
const Item = mongoose.model('Item', ItemSchema)

module.exports = Item
