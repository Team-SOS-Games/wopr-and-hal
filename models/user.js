'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    userName:{
      type: DataTypes.STRING,
      unique:true,
      validate:{
        notNull:true,
        min:1
      }
    },
    email:{
      type: DataTypes.STRING,
      min:1,
      validate:{
        isEmail:true,
        notNull:true
      }
    }
  },
  
  {
    timestamps:false
  },
  
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },

  });
  return User;
};