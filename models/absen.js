'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class absen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      absen.belongsTo(models.student);
      absen.belongsTo(models.pulang);
    }
  }
  absen.init(
    {
      tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      absen: {
        type: DataTypes.ENUM(
          'Pulang',
          'Piket Malam',
          'Piket Jaros',
          'Izin',
          'Sakit',
          'Alfa'
        ),
        allowNull: false,
      },
      jam: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'absen'
    }
  );
  return absen;
};