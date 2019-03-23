// staticRoute.js

const express = require('express');
const staticRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require static model in our routes module
let staticModel = require('./model/staticModel');


// Defined store route
staticRoute.route('/add').post( function (req, res) {
  console.log("Hey new static come..");
  
  let static = new staticModel(req.body);
  static.save()
    .then(static => {
      res.status(200).json({'static': 'static is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







 // Defined get data(index or listing) route
staticRoute.route('/').get(function (req, res) {
    staticModel.find(function(err, events){
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
staticRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let static = new staticModel(req.body);
  console.log(static);
  
  staticModel.findByIdAndUpdate({_id: req.params.id}, {$set: static}, function(err, static){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
staticRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
    staticModel.findByIdAndRemove({_id: req.params.id}, function(err, static){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// staticRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('static');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



module.exports = staticRoute;
