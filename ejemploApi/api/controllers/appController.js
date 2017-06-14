'use strict'
const mongoose = require('mongoose');

//Se conecta a mongo
const dogs = mongoose.model('Dogs');

exports.dogs_all = (req,res) =>{
  //Si las llaves son vacias quiere decir que quieres todo
  dogs.find({}, (err,dog) =>{
    if(err){
      res.send(err);
    }else{
      res.json(dog);
    }
  });
};

exports.dogs_new = (req,res) =>{
  dogs.create(req.body, (err,dog) =>{
    if(err){
      res.send(err);
    }else{
      res.json(dog);
    }
  });
};
