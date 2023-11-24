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
    return queryInterface.bulkInsert('Project', [{
      name: 'do an 1',
      description: 'phan mem',
      income:"1500000",
      status: 'dang hoan thien',
      startTime:new Date(),
      password:123456,
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