// Importing the jsdom module 
const jsdom = require("jsdom"); 
  
// Creating a window with a document 
const dom = new jsdom.JSDOM(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name"viewport" content="width = device-width, initial-scale = 1">

    <title>Login</title>
    <title>Sign up</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link href="style" rel="stylesheet" type="text/css" />

  </head>
    <body>
      <div class="container float-md-center col-lg-4 col-md-6 col-sm-7">
        <div class="jumbotron">
          <p>
            <div class="row">
              <div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label id="userDataTemplateLabel" class="titleStyle">User data template</label><br>
                <label id="firstNameLabel" class="labelStyle">First name:</label>
                <input id="firstNameInput" class="inputStyle" title="First name Textbox"></input>
                <label id="secondNameLabel" class="labelStyle">Second name:</label>
                <input id="secondNameInput" class="inputStyle" title="Second name Textbox"></input>
                <label id="firstLastnameLabel" class="labelStyle">First lastname:</label>
                <input id="firstLastnameInput" class="inputStyle" title="First lastname Textbox"></input>
                <label id="secondLastnameLabel" class="labelStyle">Second lastname:</label>
                <input id="secondLastnameInput" class="inputStyle" title="Second lastname Textbox"></input>
                <label id="IDLabel" class="labelStyle">ID:</label>
                <input id="IDInput" class="inputStyle" title="ID Textbox"></input>
                <label id="usernameLabel" class="labelStyle">Username:</label>
                <input id="usernameInput" class="inputStyle" title="Username Textbox"></input>
                <label id="passwordLabel" class="labelStyle">Password:</label>
                <input id="passwordInput" class="inputStyle" title="Password Textbox"></input>
                <label id="phonenumberLabel" class="labelStyle">Phone number:</label>
                <input id="phonenumberInput" class="inputStyle" title="Phone number Textbox"></input>
                <label id="departmentLabel" class="labelStyle">Department:</label>
                <input id="departmentInput" class="inputStyle" title="Department Textbox"></input>
                <label id="addressLabel" class="labelStyle">Address:</label>
                <input id="addressInput" class="inputStyle" title="Address Textbox"></input>
                <a id="acceptButton" class="btn btn-info buttonStyle" title="Accept button">Accept</a>
            </div>
          </p>
        </div>
      </div>

      <script src="index.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    </body>
</html> 
`); 
  
// Importing the jquery and providing it 
// with the window 
const jquery = require("jquery")(dom.window); 
  
// Appending a paragraph tag to the body 
jquery("body").append("<p>Is a cool Website</p>"); 
  
// Getting the content of the body 
const content = dom.window.document.querySelector("body"); 
  
// Printing the content of the heading and paragraph 
console.log(content.textContent); 

const express = require('express');//Set up the express 
module
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module

//Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//Get paths
router.get('/userDataTemplate', function(req, res){
  res.sendFile(path.join(__dirname, '/userDataTemplate.html'));
});
app.use('/userDataTemplate', router);

router.get('/style', function(req, res){
  res.sendFile(path.join(__dirname, '/style.css'));
});
app.use('/style', router);

//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});


/*$("#acceptButton").click(function() {
  mysql = require("mysql")
  var con = mysql.createPool({
    host: "remotemysql.com",
    user: "yKjXV24w6E",
    password: "fZz4b9EsY8",
    port: 3306,
    database: "yKjXV24w6E"
  });

  con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to pool database!");
  });

  con.query(`INSERT INTO user (ID, Name, middleName, firstLastName, secondLastName, Username, phoneNumber, Department, Address, Password) VALUES (${mysql.escape(document.getElementById("IDInput").value)}, ${mysql.escape(document.getElementById("firstNameInput").value)}, ${mysql.escape(document.getElementById("secondNameInput").value)}, ${mysql.escape(document.getElementById("firstLastnameInput").value)}, ${mysql.escape(document.getElementById("secondLastnameInput").value)}, ${mysql.escape(document.getElementById("usernameInput").value)}, ${mysql.escape(document.getElementById("phonenumberInput").value)}, ${mysql.escape(document.getElementById("departmentInput").value)}, ${mysql.escape(document.getElementById("addressInput").value)}, ${mysql.escape(document.getElementById("passwordInput").value)})`,(err)=>{
    if(err){
      throw err
      return
    }
    console.log("Row inserted")
  })
});*/