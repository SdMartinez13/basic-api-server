'use strict';

const { sequelize, ClothesModel, FoodModel } = require('./src/models');
const { start } = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error(err);
  });

ClothesModel.sync()
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error(err);
  });

FoodModel.sync()
  .then(() => {
    console.log('Success!');
  })
  .catch((err) => {
    console.error(err);
  });

start();
