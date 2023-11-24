'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinProject extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  JoinProject.init({
    idUser: DataTypes.INTEGER,
    idProject: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'JoinProject',
    freezeTableName: true
  });
  return JoinProject;
};