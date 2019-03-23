// newsModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for news
let newsModel = new Schema({
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
    collection: 'news'
});
module.exports = mongoose.model('news', newsModel);