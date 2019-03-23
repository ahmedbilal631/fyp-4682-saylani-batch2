// ACDRoute.js
const express = require('express');
const ACDRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require slider model in our routes module
let ACDModel = require('./model/ACDModel');



// Defined store route
ACDRoute.route('/add').post( function (req, res) {
  console.log("Hey new ACD come..");
  
  let ACD = new ACDModel(req.body);
  ACD.save()
    .then(ACD => {
      res.status(200).json({'ACD': 'ACD is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







    // Defined get data(index or listing) route
ACDRoute.route('/').get(function (req, res) {
   ACDModel.find(function(err, slides){
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
ACDRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let ACD = new ACDModel(req.body);
  console.log(ACD);
  
 ACDModel.findByIdAndUpdate({_id: req.params.id}, {$set: ACD}, function(err, ACD){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
ACDRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
   ACDModel.findByIdAndRemove({_id: req.params.id}, function(err, ACD){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// LACRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('ACD');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



    module.exports = ACDRoute;
