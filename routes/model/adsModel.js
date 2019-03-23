// adsModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for ads
let adsModel = new Schema({
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
    collection: 'ads'
});
module.exports = mongoose.model('ads', adsModel);