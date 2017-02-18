// 'use strict';
module.exports = function(sequelize, DataTypes) {

  var leaderboards = sequelize.define('leaderboards', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    userName: {
      // userName is the foreign key from users table userName
      type: DataTypes.STRING,
      unique: true
    },

    wins:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    losses:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    gamesplayed: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }

  } , {
    timestamps:false
  },
   {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  leaderboards.sync({
    logging: console.logging
  }).then(function() {
    leaderboards.findOrCreate({
      where: { userName: 'voldemort' }
    })
  });

  return leaderboards;
};