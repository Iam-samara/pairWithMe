var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    http = require('http'),
    bodyParser = require('body-parser'),
    Schema = moongoose.Schema;


mongoose.connect('mongodb://pairwithme:codesmith@ds035593.mongolab.com:35593/pairwithme', function(error){
  if(error) throw error;
  else {console.log('connected to DB');}
});

console.log('testing if it ask for username');
