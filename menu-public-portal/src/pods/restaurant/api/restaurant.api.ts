import { RestaurantApi } from './restaurant.api.model';

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  return require(`../../../../public/${restaurantName}.json`);
};
