import { prompt } from 'inquirer';
import fs from 'fs';
const path = require('path');
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { mapRestaurantFromApiModelToModel } from 'pods/restaurant/restaurant.mappers';
import { restaurantRepository } from 'dals';
import { confirmFile } from '../questions';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);

    const restaurantNames = fs.readdirSync(
      `${__dirname}/../dump-to-mongo/restaurant-list`
    );

    const { answer } = await prompt(confirmFile);

    if (answer) {
      for (const item in restaurantNames) {
        const {
          restaurant,
        } = require(`../dump-to-mongo/restaurant-list/${restaurantNames[item]}`);
        await restaurantRepository.saveRestaurant(
          mapRestaurantFromApiModelToModel(restaurant)
        );
        console.log(`${restaurantNames[item]} is saved`);
      }
    }
    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
