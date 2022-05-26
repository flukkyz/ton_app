'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cpi extends Model {
    static associate(models) {
    }
  }
  Cpi.init({
    Full_Name: DataTypes.STRING,
    Last_Name: DataTypes.STRING,
    First_Name: DataTypes.STRING,
    Corporate_ID: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
    tableName: 'CTM_People_Inteligence',
    modelName: 'Cpi',
  })

  return Cpi
}
