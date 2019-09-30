"use strict";
import express from 'express';
let Sequelize = require('sequelize');
let router = express.Router()
const sequelize = new Sequelize('sqlite:../db/sqlite3.db')
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTERGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

router.get('/', (req, res) => {
   User.findOne({
     where:{name: req.params.userName},
     attributes: ['id','name']}
   ).then((user) => {
     res.send(user);
   }).catch((error) => {
     console.log(error);
     res.status(500).send(error);
   });
})


