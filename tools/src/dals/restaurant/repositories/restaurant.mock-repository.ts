import { RestaurantRepository } from './restaurant.repository';
import { Restaurant } from '../restaurant.model';
import { db } from '../../mock-data';
import {
  insertRestaurant,
  paginateRestaurantList,
  updateRestaurant,
} from './restaurant.mock-repository.helpers';

export const mockRepository: RestaurantRepository = {
  getRestaurantList: async (page: number, pageSize: number) =>
    paginateRestaurantList(db.restaurants, page, pageSize),
  getRestaurantByUrlName: async (urlName: string) =>
    db.restaurants.find((restaurant) => restaurant.urlName === urlName),
  getRestaurant: async (id: string) =>
    db.restaurants.find((restaurant) => restaurant._id.toHexString() === id),
  saveRestaurant: async (restaurant: Restaurant) =>
    Boolean(restaurant._id)
      ? updateRestaurant(restaurant)
      : insertRestaurant(restaurant),
  deleteRestaurant: async (id: string) => {
    db.restaurants = db.restaurants.filter(
      (restaurant) => restaurant._id.toHexString() !== id
    );
    return true;
  },
};
