const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  litersPerWatering: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Plant', PlantSchema)
