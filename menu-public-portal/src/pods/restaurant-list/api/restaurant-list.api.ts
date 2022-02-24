import { cacheBuster } from "common/tools";
import { RestaurantApi } from "./restaurant-list.api.model";

export const getRestaurantListFromModel = async (): Promise<
  RestaurantApi[]
> => {
  const uri = cacheBuster(`http://localhost:3000/restaurantList.json`);

  const response = await fetch(uri);
  return response.json();
};
