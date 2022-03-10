import { getDBInstance } from 'core/servers';
import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';
import { getRestaurantContext } from './restaurant.context';
import { ObjectId } from 'mongodb';

export const dbRepository: RestaurantRepository = {
  getRestaurantList: async (
    page: number,
    pageSize: number
  ): Promise<Restaurant[]> => {
    if (page && pageSize) {
      const skip = page * pageSize - pageSize;
      return getRestaurantContext()
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
        .skip(skip)
        .limit(pageSize)
        .toArray();
    }
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
  },
  getRestaurantByUrlName: async (urlName: string): Promise<Restaurant> => {
    return await getRestaurantContext().findOne({ urlName: urlName });
  },
  existsRestaurantByUrlName: async (urlName: string): Promise<boolean> => {
    const count = await getRestaurantContext().countDocuments({
      urlName: urlName,
    });
    return count > 0;
  },
  saveRestaurant: async (restaurant: Restaurant): Promise<Restaurant> => {
    const { value } = await getRestaurantContext().findOneAndUpdate(
      {
        urlName: restaurant.urlName,
      },
      { $set: restaurant },
      { upsert: true, returnDocument: 'after' }
    );
    return value;
  },
  deleteRestaurant: async (urlName: string): Promise<boolean> => {
    await getRestaurantContext().deleteOne({
      _id: new ObjectId(urlName),
    });
    return true;
  },
};
