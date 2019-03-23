// sessoinModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for events
let sessoinModel = new Schema({
    sessionDB: {
    type: Number
    }
},{
    collection: "sessionDetail"
});
module.exports = mongoose.model("sessionDetail", sessoinModel);