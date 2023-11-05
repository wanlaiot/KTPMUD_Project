'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('allcode', {

    //   id:DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // email: DataTypes.STRING,
    // phone: DataTypes.STRING,
    // role: DataTypes.STRING,
    // isActive: DataTypes.STRING,
    // password: DataTypes.STRING,
    // createAt: DataTypes.STRING,
    // updateAt: DataTypes.STRING,
    // deleteAt: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      valueEN: {
        type: Sequelize.STRING
      },
      valueVI: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleteAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('allcode');
  }
};