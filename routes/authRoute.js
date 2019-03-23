// authRoute.js

const express = require('express');
const authRoute = express.Router();
const mongo = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;


// Require adminDetail model in our routes module
let authModel = require('./model/authModel');


// Defined store route
authRoute.route('/add').post( function (req, res) {
  console.log("Hey new adminDetail come..");
  
  let adminDetail = new authModel(req.body);
  adminDetail.save()
    .then(adminDetail => {
      res.status(200).json({'adminDetail': 'adminDetail is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







 // Defined get data(index or listing) route
authRoute.route('/').get(function (req, res) {
    authModel.find(function(err, adminDetail){
    if(err){
      console.log(err);
    }
    else {
      res.json(adminDetail);
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
authRoute.route('/edit/:id').get(function(req, res){
  console.log("Edit request Come" + req.params.id);
  let adminDetail = new authModel(req.body);
  console.log(adminDetail);
  
  authModel.findByIdAndUpdate({_id: req.params.id}, {$set: adminDetail}, function(err, adminDetail){
    if(err) res.json(err);
    else res.json('Successfully update'); console.log("Updated");
  })
})




  // Defined delete | remove | destroy route
authRoute.route('/delete/:id').get(function (req, res) {
  console.log("Request to delete" + req.params.id);
  
    authModel.findByIdAndRemove({_id: req.params.id}, function(err, adminDetail){
        if(err) res.json(err);
        else res.json('Successfully removed'); console.log("Deleted");
        
    })
});

// authRoute.route('/delete/:id', function (req, res) {
//   console.log("Delete Request");
  
//   var id = req.params.id;
//   var collection = db.get().collection('adminDetail');

//   collection.deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {
//     console.log("Deleted");
    
//   });

//   res.json({ success: id })
// })



module.exports = authRoute;
