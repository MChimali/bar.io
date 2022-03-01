import { RestaurantApi } from './restaurant-list.api.model';

export const getRestaurantListFromModel = async (): Promise<
  RestaurantApi[]
> => {
  const restaurantList = await fetch(
    'http://localhost:3001/api/restaurant'
  ).then((response) => response.json());

  return restaurantList as RestaurantApi[];
};
