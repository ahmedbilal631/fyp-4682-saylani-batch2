//server.js
//nodemon server


//Server settings
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const fs = require('fs')
const exphbs = require('express-handlebars');




//DB import
const mongoose = require('mongoose');
const config = require('./DB.js');

app.engine('handlebars', exphbs({ defaultLayout: './views/index' }))
app.set('view engine', 'handlebars')


//Login system setting
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const passport = require('passport');

// require('./routes/configs/passportConfig')(passport)

//Routes importing
const newsRoute = require('./routes/newsRoute');
const eventRoute = require('./routes/eventRoute');
const sliderRoute = require('./routes/sliderRoute');
const adsRoute = require('./routes/adsRoute');
const LACRoute = require('./routes/LACRoute');
const ACDRoute = require('./routes/ACDRoute');
const staticRoute = require('./routes/staticRoute');
const authRoute = require('./routes/authRoute');
const sessionRoute = require('./routes/sessionRoute');

//
// var auth = require('./routes/auth')(passport);

//MongoDB Configuration
mongoose.promise = global.promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=>{console.log('Database is connected')},
    err => {console.log("Can not connected to db" + err)}
);


//Login Middlewares
// app.use(logger('dev'));
// app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   secret: 'thesecret',
//   saveUninitialized: false,
//   resave: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())
// app.use('/auth', auth)


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });








//BodyParser middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



//Routes
app.use('/news', newsRoute);
app.use('/event', eventRoute);
app.use('/slider', sliderRoute);
app.use('/ads', adsRoute);
app.use('/lac', LACRoute);
app.use('/acd', ACDRoute);
app.use('/static', staticRoute);
app.use('/auth', authRoute);
app.use('/session', sessionRoute);


app.get('/', (req, res) => {
  res.render('index')
})


// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


//Server transmission
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});