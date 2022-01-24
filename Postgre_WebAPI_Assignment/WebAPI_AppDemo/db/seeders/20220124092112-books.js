'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [

      {

       bookname: 'My Life, My Rules',

       authorname: 'D.J. Rao',

       publicationdate: "2021-01-10",

       createdAt: new Date(),

       updatedAt: new Date()       

     },

    {

      bookname: 'Three Musketeers',

      authorname: 'Govind Guru',

      publicationdate: "2021-12-15",

      createdAt: new Date(),

      updatedAt: new Date()       

    },

    {

      bookname: 'The Sage of Sovereign',

      authorname: 'Peter Beckham',

      publicationdate: "2021-04-28",

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
