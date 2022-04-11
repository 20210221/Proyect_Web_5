const express = require("express");

const path = require("path");

const bodyParser = require("body-parser")

const App = express();

const server = 8080;

App.use(express.static('Files_Project'));

App.use(bodyParser.json());

App.use(bodyParser.urlencoded({extended:true}));

App.use(express.json());

App.use(express.urlencoded({
  extended: true
}));



App.use(express.urlencoded({
    extended: true
  }));



  App.get("/", (rec,res) =>{

    res.sendFile(path.join(__dirname + "/Files_Project/index.html"));
    

})



App.listen(server, () =>{

    console.log("The server is running on the port: " , server);

})