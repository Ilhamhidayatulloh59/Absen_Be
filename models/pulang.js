'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pulang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pulang.belongsTo(models.student);
      pulang.hasMany(models.absen);
    }
  }
  pulang.init(
    {
      tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      alasan: {
        type: DataTypes.ENUM(
          'Sakit',
          'Acara Keluarga'
        ),
        allowNull: false,
      },
      isCome: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'pulang'
    }
  );
  return pulang;
};