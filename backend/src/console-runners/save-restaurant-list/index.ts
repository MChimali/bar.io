import fs from 'fs';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { mapRestaurantFromApiModelToModel } from 'pods/restaurant/restaurant.mappers';
import { restaurantRepository } from 'dals';

export const run = async (connectionString: string) => {
  try {
    const mongoURI = connectionString || process.argv[8];
    await connectToDBServer(mongoURI);

    const restaurantNames = fs.readdirSync(`${__dirname}/../restaurant-list`);

    for (const item in restaurantNames) {
      const {
        restaurant,
      } = require(`../restaurant-list/${restaurantNames[item]}`);
      await restaurantRepository.saveRestaurant(
        mapRestaurantFromApiModelToModel(restaurant)
      );
      console.log(`${restaurantNames[item]} is saved`);
    }

    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
