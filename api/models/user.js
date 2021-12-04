'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    passwordHash: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (pass) => {
          if(pass.length < 8){
            throw new Error("Password not long enough");
          }
        }
      }
    },
    profilePic: {
      type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 2],
          notEmpty: true,
        }
    },
    city: {
        type: DataTypes.STRING,
        validate: {
          // len: [3, 21],
          notEmpty: true,
        }
    }, 
    zipcode: {
        type: DataTypes.STRING,
        validate: {
          // len: [5, 5],
          notEmpty: true,
        }
    },
    
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
    // User.hasOne(models.Cart, { foreignKey: "user_id" })
    // User.hasMany(models.Artwork, { foreignKey: "user_id"});
    // User.hasOne(models.Social, { foreignKey: "user_id"});
    // User.hasOne(models.Transaction, { foreignKey: "user_id"});

    User.hasOne(models.Cart)
    User.hasMany(models.Transaction, { as: "ArtSales", foreignKey: "sellerId" });
    User.hasMany(models.Transaction, { as: "ArtPurchases", foreignKey: "buyerId" });
    User.hasOne(models.Social);
    // User.hasOne(models.Transaction);
  };
  User.beforeSave((user, options) => {
    if(user.password){
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  })
  return User;
};