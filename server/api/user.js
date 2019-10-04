"use strict";
import express from 'express';
import {User} from './model';
const router = express.Router()

router.get('/:userName', (req, res) => {
   User.findOne({
     where:{name: req.params.userName},
     attributes: ['id', 'name', 'password']}
   ).then((user) => {
     res.send(user);
   }).catch((error) => {
     console.log(error);
     res.status(500).send(error);
   });
})

module.exports = router;


