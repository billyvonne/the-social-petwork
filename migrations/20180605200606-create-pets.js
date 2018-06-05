'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pet_type: {
        type: Sequelize.STRING
      },
      pet_name: {
        type: Sequelize.STRING
      },
      pet_age: {
        type: Sequelize.STRING
      },
      pet_birthday: {
        type: Sequelize.STRING
      },
      fur_color: {
        type: Sequelize.STRING
      },
      fave_nap: {
        type: Sequelize.STRING
      },
      fave_food: {
        type: Sequelize.STRING
      },
      fave_toy: {
        type: Sequelize.STRING
      },
      fave_scratch: {
        type: Sequelize.STRING
      },
      fave_walk: {
        type: Sequelize.STRING
      },
      fave_window: {
        type: Sequelize.STRING
      },
      fave_feature: {
        type: Sequelize.STRING
      },
      bowl_empty: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pets');
  }
};