// adsRoute.js

const express = require('express');
const adsRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require slider model in our routes module
let adsModel = require('./model/adsModel');



// Defined store route
adsRoute.route('/add').post( function (req, res) {
  console.log("Hey new ad come..");
  
  let ad = new adsModel(req.body);
  ad.save()
    .then(ad => {
      res.status(200).json({'ad': 'ad is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







    // Defined get data(index or listing) route
adsRoute.route('/').get(function (req, res) {
    adsModel.find(function(err, ads){
    if(err){
      console.log(err);
    }
    else {
      res.json(ads);
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
adsRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let ad = new adsModel(req.body);
  console.log(ad);
  
  adsModel.findByIdAndUpdate({_id: req.params.id}, {$set: ad}, function(err, ad){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
adsRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
    adsModel.findByIdAndRemove({_id: req.params.id}, function(err, ad){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// adsRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('ad');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



    module.exports = adsRoute;
