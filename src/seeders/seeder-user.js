'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // email: DataTypes.STRING,
    // phone: DataTypes.STRING,
    // role: DataTypes.STRING,
    // isActive: DataTypes.BOOLEAN,
    // password: DataTypes.STRING,
    // createAt: DataTypes.STRING,
    // updateAt: DataTypes.STRING,
    // deleteAt: DataTypes.STRING,
    return queryInterface.bulkInsert('Users', [{
      firstName: 'quan',
      lastName: 'la',
      phone:"123456",
      email: 'quanla@example.com',
      role:"member",
      isActive:true,
      password:12345678,
      createdAt: new Date(),
      updatedAt: new Date(),
      deleteAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};