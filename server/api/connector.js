"use strict";
const DataType = require('sequelize')
const Sequelize = new DataType({
  dialect: 'sqlite',
  storage: 'C:\\code\\project\\server\\db\\sqlite3.db',
  define:{
    timestamps: false
  }
})
module.exports = {
  DataType,
  Sequelize
}
