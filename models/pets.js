'use strict';
module.exports = (sequelize, DataTypes) => {
  var pets = sequelize.define('pets', {
    pet_type: DataTypes.STRING,
    pet_name: DataTypes.STRING,
    pet_age: DataTypes.STRING,
    pet_birthday: DataTypes.STRING,
    fur_color: DataTypes.STRING,
    fave_nap: DataTypes.STRING,
    fave_food: DataTypes.STRING,
    fave_toy: DataTypes.STRING,
    fave_scratch: DataTypes.STRING,
    fave_walk: DataTypes.STRING,
    fave_window: DataTypes.STRING,
    fave_feature: DataTypes.STRING,
    bowl_empty: DataTypes.STRING
  }, {});
  pets.associate = function(models) {
    // associations can be defined here
  };
  return pets;
};