import { resolve } from 'path';
import { getDBInstance } from 'core/servers';
import {
  CompilerOptions,
  generateSchema,
  getProgramFromFiles,
  PartialArgs,
} from 'typescript-json-schema';
import { getRestaurantContext } from './restaurant.context';
import * as model from './restaurant.model';

export const restaurantDbRepository = {
  getRestaurantByUrlName: async (
    urlName: string
  ): Promise<model.Restaurant> => {
    try {
      return await getRestaurantContext().findOne({ urlName: urlName });
    } catch (error) {
      throw error;
    }
  },
  getRestaurantList: async (): Promise<model.Restaurant[]> => {
    try {
      return await getRestaurantContext()
        .find(
          {},
          {
            projection: {
              name: 1,
              urlName: 1,
              phone: 1,
              address: 1,
              locationUrl: 1,
              description: 1,
              theme: 1,
            },
          }
        )
        .toArray();
    } catch (error) {
      throw error;
    }
  },
  saveRestaurant: async (restaurant: model.Restaurant) => {
    try {
      await getRestaurantContext().insertOne(restaurant);
    } catch (error) {
      throw error;
    }
  },
};
