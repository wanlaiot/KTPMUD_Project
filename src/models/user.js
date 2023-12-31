'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Project, { through: 'JoinProject',});
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    deleteAt: DataTypes.STRING,
     //createdAt: DataTypes.STRING,
     //updatedAt: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};