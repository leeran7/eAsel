'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class SampleArtworks extends Model {}

  SampleArtworks.init({
      image: { type: DataTypes.STRING},
      thumbnail: { type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'sampleArtworks'
  });

  SampleArtworks.associate = (models) => {
  };

  return SampleArtworks;
};