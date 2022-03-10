import { Restaurant } from '../restaurant.model';

export interface RestaurantRepository {
  getRestaurantList: (page: number, pageSize: number) => Promise<Restaurant[]>;
  getRestaurantByUrlName: (urlName: string) => Promise<Restaurant>;
  existsRestaurantByUrlName: (urlName: string) => Promise<boolean>;
  saveRestaurant: (restaurant: Restaurant) => Promise<Restaurant>;
  deleteRestaurant: (id: string) => Promise<boolean>;
}
