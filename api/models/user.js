'use strict';
const { Model, Sequalize } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
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
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here
    User.hasOne(models.Transactions);
    User.hasMany(models.Artwork);
    User.hasOne(models.Socials);
  };

  return User;
};