import { RestaurantApi } from "./restaurant.api.model";
import { cacheBuster } from "common/cacheBuster";

export const getRestaurantByName = async (
  restaurantName: string
): Promise<RestaurantApi> => {
  const uri = cacheBuster(`http://localhost:3000/${restaurantName}.json`);
  const response = await fetch(uri);
  return response.json();
};
