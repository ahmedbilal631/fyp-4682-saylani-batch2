// sliderModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for slider
let sliderModel = new Schema({
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
    collection: 'slides'
});
module.exports = mongoose.model('slides', sliderModel);