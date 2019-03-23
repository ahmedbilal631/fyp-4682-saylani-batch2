// ACDModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for events
let ACDModel = new Schema({
  Category: {
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
    collection: "ACD"
});
module.exports = mongoose.model("ACD", ACDModel);