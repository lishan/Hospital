"use strict";
const DataType = require('sequelize')
const Connector = new DataType({
  dialect: 'sqlite',
  storage: 'C:\\code\\project\\server\\db\\sqlite3.db'
})
module.exports = {
  DataType,
  Connector
}
