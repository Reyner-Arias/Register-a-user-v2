const express = require('express');//Set up the express  module
const app = express();
const router = express.Router();
const path = require('path');//Include the Path module
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const controller = {};

app.set('port', process.env.PORT || 3000)

app.use(myConnection(mysql, {
    host: "remotemysql.com",
    user: "yKjXV24w6E",
    password: "fZz4b9EsY8",
    port: 3306,
    database: "yKjXV24w6E"
  }, 'single'))

app.use(express.urlencoded({extended: false}))

controller.save = (req,res) => {
  const data = req.body;
  req.getConnection((err,conn) => {
    if(err){
      next(err);
    }
    conn.query('INSERT INTO user set ?', [data], (err, user) => {
      if (err){
        if (err.errno == 1062){
          alert("El usuario ya existe en el sistema");
          res.redirect('/errorScreen');
        } 
      } else {
        alert("El usuario se registró exitosamente");
        res.redirect('/userRegisteredCorrectly');
      }
    });
  })
};

//Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//Get paths
router.get('/index', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/index', router);

router.get('/userDataTemplate', function(req, res){
  res.sendFile(path.join(__dirname, '/userDataTemplate.html'));
});
app.use('/userDataTemplate', router);

router.get('/errorScreen', function(req, res){
  res.sendFile(path.join(__dirname, '/errorScreen.html'));
});
app.use('/errorScreen', router);

router.get('/userRegisteredCorrectly', function(req, res){
  res.sendFile(path.join(__dirname, '/userRegisteredCorrectly.html'));
});
app.use('/userRegisteredCorrectly', router);

router.get('/style', function(req, res){
  res.sendFile(path.join(__dirname, '/style.css'));
});
app.use('/style', router);

router.post('/add', controller.save);

//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});