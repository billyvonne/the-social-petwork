var mySQL2 = require('mySQL2')
var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      real_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [1]
          }
      },
      user_email: {
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


