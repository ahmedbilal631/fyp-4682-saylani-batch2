// authModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for events
let authModel = new Schema({
    Name: {
    type: String
    },
    Password: {
    type: String
  }
},{
    collection: "adminDetail"
});
module.exports = mongoose.model("adminDetail", authModel);