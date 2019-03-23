// staticModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for events
let staticModel = new Schema({
  Category: {
    type: String
  },
  Description: {
    type: String
  },
  Detail: {
    type: String
  },
  ImgUrl: {
    type: String
  }

},{
    collection: 'static'
});
module.exports = mongoose.model('static', staticModel);