'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      student.hasMany(models.absen);
    }
  }
  student.init(
    {
        NIS: {
            type: DataTypes.STRING,
            primaryKey: true,
            },
      Nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      JK: {
        type: DataTypes.ENUM(
            'Putra', 'Putri'
          ),
          defaultValue: 'Putra',
          allowNull: false,
      },
      pondok: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      program: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kamar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'student',
      timestamps: false,
    }
  );
  return student;
};
