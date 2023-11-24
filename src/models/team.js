'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,

    // email: DataTypes.STRING,
    isActive: DataTypes.STRING,
    role: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createAt: DataTypes.STRING,
    updateAt: DataTypes.STRING,
    deleteAt: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Team',
    freezeTableName: true
  });
  return Team;
};