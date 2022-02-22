import { prompt } from 'inquirer';
import fs from 'fs';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';
import { restaurantDbRepository } from 'dals';
import { confirmFile } from '../questions';

export const run = async () => {
  try {
    await connectToDBServer(envConstants.MONGODB_URI);

    const { answer } = await prompt(confirmFile);

    if (answer) {
      const restaurantList = await restaurantDbRepository.getRestaurantList();
      if (Array.isArray(restaurantList)) {
        fs.writeFileSync(
          `../menu-public-portal/public/restaurantList.json`,
          JSON.stringify(restaurantList, null, 2)
        );

        console.log('Restaurant List created successfully in JSON format');
      } else return [];
    }

    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
