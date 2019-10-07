"use strict";
import express from 'express';
import {DataType, Sequelize} from './connector'
import user from '../models/user'
const User = user(Sequelize, DataType)

const router = express.Router()

router.post('/login', (req, res)=> {
  let body = req.body
  User.findOne({
    where:{
      name: body.name,
      password: body.password
    },
    attributes:['name','role']
  }).then((user) => {
    if(user){
      res.send(user);
    }else{
      res.status(400).send('Bad Request');
    }
  })
})

module.exports = router;


