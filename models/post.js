'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Posts', {
  	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    point: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    notice: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    y: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sitename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });
};
