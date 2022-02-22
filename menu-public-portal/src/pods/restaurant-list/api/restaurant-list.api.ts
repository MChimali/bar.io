import { RestaurantApi } from "./restaurant-list.api.model";

export const getRestaurantListFromModel = async (): Promise<RestaurantApi[]> => {
  const response = await fetch(`http://localhost:3000/restaurantList.json`);
  return response.json();
};
