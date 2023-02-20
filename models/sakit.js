'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sakit.belongsTo(models.student);
      sakit.hasMany(models.absen);
    }
  }
  sakit.init(
    {
      tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      penyakit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'sakit'
    }
  );
  return sakit;
};