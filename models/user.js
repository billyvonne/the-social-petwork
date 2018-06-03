var mySQL2 = require('mySQL2')
var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }

    });

    User.associate = function(models) {
        User.hasMany(models.Pet, {
            onDelete: "cascade"
        });
    };
    
    return User;
  };


