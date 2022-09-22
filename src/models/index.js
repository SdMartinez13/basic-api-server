'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const clothes = require('./clothes.js');
const food = require('./food.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const ClothesModel = clothes(sequelizeDatabase, DataTypes);
const FoodModel = food(Sequelize, DataTypes);

module.exports = {
  sequelizeDatabase,
  ClothesModel,
  FoodModel,
};
