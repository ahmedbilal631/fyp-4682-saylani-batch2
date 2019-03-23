// newsRoute.js

const express = require('express');
const newsRoute = express.Router();

// Require news model in our routes module
let newsModel = require('./model/newsModel');


// Defined store route
newsRoute.route('/add').post( function (req, res) {
  console.log("Hey new news come..");
  
  let news = new newsModel(req.body);
  news.save()
    .then(news => {
      res.status(200).json({'news': 'news in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    })
    });







    // Defined get data(index or listing) route
newsRoute.route('/').get(function (req, res) {
    newsModel.find(function(err, newses){
    if(err){
      console.log(err);
    }
    else {
      res.json(newses);
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


  // Defined delete | remove | destroy route
newsRoute.route('/delete/:id').get(function (req, res) {
    newsModel.findByIdAndRemove({_id: req.params.id}, function(err, news){
        if(err) res.json(err);
        else res.json('Successfully removed');
    })
});
    module.exports = newsRoute;
