module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        pet_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
       pet_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      pet_age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },
      pet_birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      
      }

    });
    return Pet;
  };