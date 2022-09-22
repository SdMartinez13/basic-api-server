'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    cuisine: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    foodGroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
