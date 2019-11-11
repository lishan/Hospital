"use strict";
import express from 'express';
import {DataType, Sequelize} from './connector'
import record from '../models/record'
const Record = record(Sequelize, DataType)

const router = express.Router()

router.get("/", (req, res) => {
  Record.findAll().then((data)=>{
    res.send(data);
  })
})

router.post("/", (req, res) => {
  req.body.start = new Date().getTime();
  Record.create(req.body).then((data)=>{
    console.log(data);
    res.send("created");
  })
})

module.exports = router;
