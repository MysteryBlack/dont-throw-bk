'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Groups', {
	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    groupname: {
      type: DataTypes.STRING(20),
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
