// LACRoute.js
const express = require('express');
const LACRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require slider model in our routes module
let LACModel = require('./model/LACModel');



// Defined store route
LACRoute.route('/add').post( function (req, res) {
  console.log("Hey new LAC come..");
  
  let LAC = new LACModel(req.body);
  LAC.save()
    .then(LAC => {
      res.status(200).json({'LAC': 'LAC is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







    // Defined get data(index or listing) route
LACRoute.route('/').get(function (req, res) {
   LACModel.find(function(err, slides){
    if(err){
      console.log(err);
    }
    else {
      res.json(slides);
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
LACRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let LAC = new LACModel(req.body);
  console.log(LAC);
  
 LACModel.findByIdAndUpdate({_id: req.params.id}, {$set: LAC}, function(err, LAC){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
LACRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
   LACModel.findByIdAndRemove({_id: req.params.id}, function(err, LAC){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// LACRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('LAC');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



    module.exports = LACRoute;
