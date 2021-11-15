'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Social extends Model {}

  Social.init({
    // socials_id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    linkedin: {
        type: DataTypes.STRING,
        validate: {
          // len: [28, 50],
          notEmpty: true,
        }
    },
    instagram: {
        type: DataTypes.STRING,
        validate: {
          // len: [26, 50],
          notEmpty: true,
        }
    }, 
    twitter: {
        type: DataTypes.STRING,
        validate: {
          // len: [12, 30],
          notEmpty: true,
        }
    }, 
    facebook: {
        type: DataTypes.STRING,
        validate: {
          // len: [25, 50],
          notEmpty: true,
        }
    },
    
  }, {
    sequelize,
    modelName: 'social'
  });

  Social.associate = (models) => {
    // associations can be defined here
    // Social.belongsTo(models.User, { foreignKey: "socials_id"});
    Social.belongsTo(models.User);
  };

  return Social;
};