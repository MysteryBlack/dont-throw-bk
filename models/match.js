'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match', {
  	id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    post: {
      type: DataTypes.INTEGER,
      allowNull: false	
    },
    tagid :{
      type: DataTypes.STRING(10),
      allowNull: false	
    },
  	postid: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    wantid: {
      type: DataTypes.STRING(10),
      allowNull: false	
    },
  	message: {
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
