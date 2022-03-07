import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';
import { getRestaurantContext } from './restaurant.context';
import { ObjectId } from 'mongodb';

export const dbRepository: RestaurantRepository = {
  getRestaurantList: async (
    page: number,
    pageSize: number
  ): Promise<Restaurant[]> => {
    try {
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
    } catch (error) {
      throw error;
    }
  },
  getRestaurantByUrlName: async (urlName: string): Promise<Restaurant> => {
    try {
      return await getRestaurantContext().findOne({ urlName: urlName });
    } catch (error) {
      throw error;
    }
  },
  getRestaurant: async (id: string): Promise<Restaurant> => {
    try {
      return await getRestaurantContext().findOne({ _id: new ObjectId(id) });
    } catch (error) {
      throw error;
    }
  },
  saveRestaurant: async (restaurant: Restaurant): Promise<Restaurant> => {
    try {
      const { value } = await getRestaurantContext().findOneAndUpdate(
        {
          _id: restaurant._id,
        },
        { $set: restaurant },
        { upsert: true, returnDocument: 'after' }
      );
      return value;
    } catch (error) {
      throw error;
    }
  },
  deleteRestaurant: async (id: string): Promise<boolean> => {
    try {
      await getRestaurantContext().deleteOne({
        _id: new ObjectId(id),
      });
      return true;
    } catch (error) {
      throw error;
    }
  },
};
