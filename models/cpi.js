'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cpi extends Model {
    static associate(models) {
    }
  }
  Cpi.init({
    Corporate_ID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Full_Name: DataTypes.STRING,
    Last_Name: DataTypes.STRING,
    First_Name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'CTM_People_Inteligence',
    modelName: 'Cpi',
  })

  return Cpi
}
