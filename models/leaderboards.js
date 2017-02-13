'use strict';
module.exports = function(sequelize, DataTypes) {
  var leaderboards = sequelize.define('leaderboards', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    userID:{
      // userID is the foreign key from users table primary key
      type:DataTypes.INTEGER,
      unique:true
    },
    wins:{
      type:DataTypes.INTEGER,
    },
    loses:{
      type:DataTypes.INTEGER
    },
    gamesplayed:{
      type:DataTypes.INTEGER,
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