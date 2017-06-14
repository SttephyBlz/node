'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color:{
    type: String
  }
});
//                            Nombre de la tabla
module.exports = mongoose.model('Dogs', dogSchema);
