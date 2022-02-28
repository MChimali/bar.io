import { Restaurant } from '../restaurant.model';
import { db } from '../../mock-data';
import { ObjectId } from 'mongodb';

// TODO Test all functions
export const paginateRestaurantList = (
  restaurantList: Restaurant[],
  page: number,
  pageSize: number
) => {
  if (Array.isArray(restaurantList)) {
    if (page && pageSize) {
      let paginatedRestaurant = [...restaurantList];
      const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(
        startIndex + pageSize,
        paginatedRestaurant.length
      );
      paginatedRestaurant = paginatedRestaurant.slice(startIndex, endIndex);

      return paginatedRestaurant;
    } else return restaurantList;
  } else return [];
};

export const insertRestaurant = async (restaurant) => {
  const _id = new ObjectId();
  const newRestaurant = {
    ...restaurant,
    _id,
  };

  db.restaurants = [...db.restaurants, newRestaurant];
  return newRestaurant;
};

export const updateRestaurant = async (updateRestaurant: Restaurant) => {
  db.restaurants = db.restaurants.map((restaurant) =>
    restaurant._id.toHexString() === updateRestaurant._id.toHexString()
      ? { ...restaurant, ...updateRestaurant }
      : restaurant
  );
  return updateRestaurant;
};
