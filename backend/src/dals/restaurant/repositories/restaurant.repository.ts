import { Restaurant } from '../restaurant.model';

export interface RestaurantRepository {
  getRestaurantList: (page: number, pageSize: number) => Promise<Restaurant[]>;
  getRestaurantByUrlName: (urlName: string) => Promise<Restaurant>;
  getRestaurant: (urlName: string) => Promise<Restaurant>;
  saveRestaurant: (restaurant: Restaurant) => Promise<Restaurant>;
  deleteRestaurant: (id: string) => Promise<boolean>;
}
