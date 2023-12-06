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
    //idUser: DataTypes.INTEGER,    // asociation da tu tao 2 truong nay trong quan he manytomany giua user va project
    //isTeam: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'JoinTeam',
    freezeTableName: true,
    //timestamps: false
  });
  return JoinTeam;
};