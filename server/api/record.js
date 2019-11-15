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
  Record.create(req.body).then((data)=>{
    res.send("创建成功");
  }).catch(()=>{
    res.send("创建失败");
  });
})

router.put("/", (req, res) => {
    Record.update(req.body,{
      where: {id: req.body.id}
    }).then((data)=>{
      res.send("更新成功");
    }).catch(()=>{
      res.status(500).send("更新错误");
    });
})

router.delete("/:id", (req, res)=> {
  Record.destroy({
    where:{
      id: req.params.id
    }
  }).then((data)=>{
    res.send("删除成功");
  }).catch(()=>{
    res.status(500).send("删除错误");
  });
})

router.post("/:id", (req, res)=>{
  let date = new Date();
  let month = date.getMonth() + 1;
  Record.update({
    date2: date.getFullYear() + "/" + month + "/" + date.getDate()
  },{
    where: {id: req.params.id}
  }).then((data)=>{
        res.send("归档成功");
      }).catch(()=>{
        res.status(500).send("归档错误");
      });
})

module.exports = router;
