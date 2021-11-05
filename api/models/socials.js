'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Socials extends Model {}

  Socials.init({
    linkedIn: {
        type: DataTypes.STRING,
        validate: {
          len: [28, 50],
          notEmpty: true,
        }
    },
    instagram: {
        type: DataTypes.STRING,
        validate: {
          len: [26, 50],
          notEmpty: true,
        }
    }, 
    twitter: {
        type: DataTypes.STRING,
        validate: {
          len: [12, 30],
          notEmpty: true,
        }
    }, 
    facebook: {
        type: DataTypes.STRING,
        validate: {
          len: [25, 50],
          notEmpty: true,
        }
    },
    socials_id: {
        type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'socials'
  });

  Socials.associate = (models) => {
    // associations can be defined here
    Socials.belongsTo(models.User, { foreignKey: "socialsId", as: "socials" });
  };

  return Socials;
};