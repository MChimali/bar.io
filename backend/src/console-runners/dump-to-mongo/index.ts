import { prompt } from 'inquirer';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { mapRestaurantFromApiModelToModel } from 'pods/restaurant/restaurant.mappers';
import { restaurantRepository } from 'dals';
import { inputQuestion, confirmFile } from './questions';

export const run = async (connectionString: string) => {
  try {
    await connectToDBServer(connectionString);

    const { file } = await prompt(inputQuestion);
    const { answer } = await prompt(confirmFile);

    if (answer) {
      const { restaurant } = require(`./restaurant-list/${file}`);
      const restaurantModel =
        await restaurantRepository.existsRestaurantByUrlName(file);

      if (restaurantModel) {
        throw 'Restaurant with this name exist in data base';
      } else {
        await restaurantRepository.saveRestaurant(
          mapRestaurantFromApiModelToModel(restaurant)
        );

        console.log('Restaurant created:', { restaurant: file });
      }

      await disconnectFromDbServer();
    }
  } catch (error) {
    console.error(error);
  }
};
