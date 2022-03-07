import { RestaurantApi } from './restaurant-list.api.model';
import { envConstants } from 'common/constants';

export const getRestaurantListFromModel = async (): Promise<
  RestaurantApi[]
> => {
  const restaurantList = await fetch(
    `${envConstants.BASE_API_URL}/restaurant`
  ).then((response) => response.json());

  return restaurantList;
};
