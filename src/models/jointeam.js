'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinTeam extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  JoinTeam.init({
    idUser: DataTypes.INTEGER,
    isTeam: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'JoinTeam',
    freezeTableName: true
  });
  return JoinTeam;
};