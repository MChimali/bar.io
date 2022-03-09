import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';
import { db } from '../../mock-data';

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

export const insertRestaurant = async (restaurant: Restaurant) => {
  db.restaurants = [...db.restaurants, restaurant];
  return restaurant;
};

export const updateRestaurant = async (updateRestaurant: Restaurant) => {
  db.restaurants = db.restaurants.map((restaurant) =>
    restaurant.urlName === updateRestaurant.urlName
      ? { ...restaurant, ...updateRestaurant }
      : restaurant
  );
  return updateRestaurant;
};

export const mockRepository: RestaurantRepository = {
  getRestaurantList: async (page: number, pageSize: number) =>
    paginateRestaurantList(db.restaurants, page, pageSize),
  getRestaurantByUrlName: async (urlName: string) =>
    db.restaurants.find((restaurant) => restaurant.urlName === urlName),
  existsRestaurantByUrlName: async (urlName: string) =>
    db.restaurants.some((r) => r.urlName === urlName),
  saveRestaurant: async (restaurant: Restaurant) =>
    db.restaurants.some((r) => r.urlName === restaurant.urlName)
      ? updateRestaurant(restaurant)
      : insertRestaurant(restaurant),
  deleteRestaurant: async (id: string) => {
    db.restaurants = db.restaurants.filter(
      (restaurant) => restaurant._id.toHexString() !== id
    );
    return true;
  },
};
