const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', itemSchema)
