'use strict';
module.exports = (sequelize, DataTypes) => {
  var pet = sequelize.define('pet', {
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
  pet.associate = function(models) {
    pet.belongsTo(models.user,{as : 'user', foreignKey: 'userId'})
  };
  return pet;
};