/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('record', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'name'
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gender'
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'age'
    },
    credit: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'credit'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'comment'
    },
    date1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'date1'
    },
    name1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'name1'
    },
    hospital: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'hospital'
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'category'
    },
    channelInject: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'channel_inject'
    },
    channelLay: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'channel_lay'
    },
    channelSpin: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'channel_spin'
    },
    channelLength: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'channel_length'
    },
    portLay: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'port_lay'
    },
    date2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'date2'
    },
    heal: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'heal'
    },
    bloodCheck: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'blood_check'
    }
  }, {
    tableName: 'record'
  });
};
