import { RestaurantApi } from './restaurant.api.model';
import { envConstants } from 'common/constants';

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  const restaurant = await fetch(
    `${envConstants.BASE_API_URL}/restaurant/${restaurantName}`
  ).then((response) => {
    return response.json();
  });
  return restaurant as RestaurantApi;
};
