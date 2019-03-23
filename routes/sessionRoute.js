// sessionRoute.js

const express = require('express');
const sessionRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require session model in our routes module
let sessionModel = require('./model/sessionModel');


// Defined store route
sessionRoute.route('/add').post( function (req, res) {
  console.log("Hey new session come..");
  
  let session = new sessionModel(req.body);
  session.save()
    .then(session => {
      res.status(200).json({'session': 'session is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







 // Defined get data(index or listing) route
sessionRoute.route('/').get(function (req, res) {
    sessionModel.find(function(err, session){
    if(err){
      console.log(err);
    }
    else {
      res.json(session);
    }
  })
});



// Defined edit route
// newsRoute.route('/newsDetail/:id').get(function (req, res) {
//     let id = req.params.id;
//     newsModel.findById(id, function (err, news){
//         res.json(news);
//     })
//   });


//Edit route
sessionRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let session = new sessionModel(req.body);
  console.log(session);
  
  sessionModel.findByIdAndUpdate({_id: req.params.id}, {$set: session}, function(err, session){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
sessionRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete session" + req.params.id);
  
    sessionModel.findByIdAndRemove({_id: req.params.id}, function(err, session){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Session Deleted");
        
    })
});

// sessionRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('session');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



module.exports = sessionRoute;
