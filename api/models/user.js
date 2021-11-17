'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 13],
        notEmpty: true,
      }
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
          len: [3, 21],
          notEmpty: true,
        }
    }, 
    zipcode: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 5],
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

  return User;
};