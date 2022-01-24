'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accounts', [

      {

       accno: '100',

       accname: 'Savings',

       balance: 100000,

       createdAt: new Date(),

       updatedAt: new Date()       

     },

     {

      accno: '101',

      accname: 'Current',

      balance: 134000,

      createdAt: new Date(),

      updatedAt: new Date()       

    },

    {

      accno: '105',

       accname: 'Business',

       balance: 1345000,

      createdAt: new Date(),

      updatedAt: new Date()       

    }

    ], {});
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
