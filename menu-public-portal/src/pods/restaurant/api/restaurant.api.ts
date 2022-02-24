import { RestaurantApi } from "./restaurant.api.model";
import { envConstants } from 'common/constants';
import { cacheBuster } from "common/tools";

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  const uri = cacheBuster(`/${restaurantName}.json`);
  const response = await fetch(uri);
  return response.json();
};
