// 'use strict';
module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    userName: {
      type: DataTypes.STRING,
      unique: true,
      validate:{
        notEmpty: true,
        min: 1
      }
    },

    password: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        min: 1
      }
    }
  },
  
  {
    timestamps:false
  });

  User.sync({
    logging: console.log
  });
  
  return User;

};