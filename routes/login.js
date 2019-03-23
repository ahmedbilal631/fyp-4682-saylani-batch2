var express = require('express');
var router = express.Router();

var loggedin = function (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Express'
//   });
// });


router.get('/login', function (req, res, next) {
    res.redirect('/login');
});


router.get('/signup', function (req, res, next) {
  res.redirect('/signUp');
});


router.get('/profile', loggedin, function (req, res, next) {
    res.redirect('/adminPage')
});


router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})
module.exports = router;