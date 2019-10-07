/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
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
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'password'
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'role'
    }
  }, {
    tableName: 'user'
  });
};
