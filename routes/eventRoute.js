// eventRoute.js

const express = require('express');
const eventRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require event model in our routes module
let eventModel = require('./model/eventModel');


// Defined store route
eventRoute.route('/add').post( function (req, res) {
  console.log("Hey new event come..");
  
  let event = new eventModel(req.body);
  event.save()
    .then(event => {
      res.status(200).json({'event': 'event is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







 // Defined get data(index or listing) route
eventRoute.route('/').get(function (req, res) {
    eventModel.find(function(err, events){
    if(err){
      console.log(err);
    }
    else {
      res.json(events);
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
eventRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let event = new eventModel(req.body);
  console.log(event);
  
  eventModel.findByIdAndUpdate({_id: req.params.id}, {$set: event}, function(err, event){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
eventRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
    eventModel.findByIdAndRemove({_id: req.params.id}, function(err, event){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// eventRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('event');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



module.exports = eventRoute;
