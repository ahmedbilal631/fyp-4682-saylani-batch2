// eventModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for events
let eventModel = new Schema({
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
    collection: 'event'
});
module.exports = mongoose.model('event', eventModel);