'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    income: DataTypes.STRING,
    status: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    //password: DataTypes.STRING,
    //createdAt: DataTypes.STRING,
    //updatedAt: DataTypes.STRING,
    deleteAt: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Project',
    freezeTableName: true
  });
  return Project;
};