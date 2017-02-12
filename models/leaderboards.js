'use strict';
module.exports = function(sequelize, DataTypes) {
  var leaderboards = sequelize.define('leaderboards', {
    id: {
      type:DataTypes.INTERGER,
      primaryKey: true,
      autoIncrement:true
    },
    userID:{
      type:DataTypes.INTERGER,
      unique:true
    },
    wins:{
      type:DataTypes.INTERGER,
    },
    loses:{
      type:DataTypes.INTERGER
    },
    gamesplayed:{
      type:DataTypes.INTERGER,
    }
  },{
    timestamps:false
  },
   {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return leaderboards;
};