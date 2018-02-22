var express = require("express");
const sequelize = require("./server/connection");
const DataType = require('sequelize');

var usermaster = require("./server/models/usermaster");
var rolemaster = require("./server/models/rolemaster");
var applicationmaster = require("./server/models/applicationmaster");
var userprofile = require("./server/models/userprofile");
var userapplication = require("./server/models/userapplication");
var userrole = require("./server/models/userrole");

var bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var app = express();

//accept body post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: err
  });
});

//path publish
app.use(express.static(path.join(__dirname, 'dist')));

//prefix api
let apipref = "/api";

//route function
app.get(apipref+"/usermaster",function(req,res){
    usermaster(sequelize, DataType).findAll({where: req.query})
    .then(usermaster => {
      res.json(usermaster);
    }).catch(function (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.message });
    });
});

app.post(apipref+"/login",function(req,res){
  var username = req.body.username;
  var password = req.body.password; 

  sequelize.query('CALL sp_Login (:ParamUsername, :ParamPassword)', 
        {replacements: { ParamUsername: username, ParamPassword: password }})
  .then(v=>res.json(v))
  .catch(function (err) {
    console.log(err);
    res.status(500);
    res.json({ message: err.message });
  });
});

app.get(apipref+"/rolemaster",function(req,res){
    rolemaster(sequelize, DataType).findAll({where: req.query})
    .then(rolemaster => {
      res.json(rolemaster);
    }).catch(function (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.message });
    });
});

app.get(apipref+"/applicationmaster",function(req,res){
    applicationmaster(sequelize, DataType).findAll({where: req.query})
    .then(applicationmaster => {
      res.json(applicationmaster);
    }).catch(function (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.message });
    });
});

app.get(apipref+"/userprofile",function(req,res){
    userprofile(sequelize, DataType).findAll({where: req.query})
    .then(userprofile => {
      res.json(userprofile);
    }).catch(function (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.message });
    });
});

app.get(apipref+"/userapplication",function(req,res){
    userapplication(sequelize, DataType).findAll({where: req.query})
    .then(userapplication => {
      res.json(userapplication);
    }).catch(function (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.message });
    });
});

app.get(apipref+"/userrole",function(req,res){
    userrole(sequelize, DataType).findAll({where: req.query})
    .then(userrole => {
      res.json(userrole);
    }).catch(function (err) {
      console.log(err);
      res.status(500);
      res.json({ message: err.message });
    });
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));