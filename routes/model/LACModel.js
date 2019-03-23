// LACModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for slider
let LACModel = new Schema({
  Title: {
    type: String
  },
  Headline: {
    type: String
  },
  Detail: {
    type: String
  },
  ImgUrl: {
    type: String
  }

},{
    collection: 'LAC'
});
module.exports = mongoose.model('LAC', LACModel);