import { RestaurantApi } from './restaurant.api.model';

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  const restaurant = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantName}`
  ).then((response) => response.json());
  return restaurant as RestaurantApi;
};
