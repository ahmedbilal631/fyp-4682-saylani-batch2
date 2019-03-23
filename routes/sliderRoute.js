// sliderRoute.js
const express = require('express');
const sliderRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require slider model in our routes module
let sliderModel = require('./model/sliderModel');



// Defined store route
sliderRoute.route('/add').post( function (req, res) {
  console.log("Hey new Slide come..");
  
  let slide = new sliderModel(req.body);
  slide.save()
    .then(slide => {
      res.status(200).json({'slide': 'slide is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







    // Defined get data(index or listing) route
sliderRoute.route('/').get(function (req, res) {
    sliderModel.find(function(err, slides){
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
sliderRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let slide = new sliderModel(req.body);
  console.log(slide);
  
  sliderModel.findByIdAndUpdate({_id: req.params.id}, {$set: slide}, function(err, slide){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
sliderRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
    sliderModel.findByIdAndRemove({_id: req.params.id}, function(err, slide){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// sliderRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('slide');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



    module.exports = sliderRoute;
