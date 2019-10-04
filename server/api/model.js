'use strict'
import {DataType, Connector} from './connector'
const User = Connector.define('user', {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataType.STRING,
    allowNull: false
  },
  password: {
    type: DataType.STRING,
    allowNull: false
  }
}, {
  tableName: 'user'
})

module.exports = {
  User
}
