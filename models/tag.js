'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tags', {
  	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postid: {
      type: DataTypes.INTEGER,
      allowNull: false	
    },
    tagid: {
      type: DataTypes.STRING(15),
      allowNull: false	
    },
    picid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    x: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    y: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sitename: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    addr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tagname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    groupname: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
  	createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });
};
