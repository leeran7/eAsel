'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Social extends Model {}

  Social.init({
    linkedin: {
        type: DataTypes.STRING,
    },
    pinterest: {
      type: DataTypes.STRING
  },
    instagram: {
        type: DataTypes.STRING
    }, 
    twitter: {
        type: DataTypes.STRING
    }, 
    facebook: {
        type: DataTypes.STRING
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