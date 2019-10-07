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
    start: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'start'
    },
    end: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'end'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'comment'
    },
    nurse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'nurse'
    }
  }, {
    tableName: 'record'
  });
};
