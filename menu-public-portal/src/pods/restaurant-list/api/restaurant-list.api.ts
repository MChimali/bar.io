import { cacheBuster } from "common/tools";
import { RestaurantApi } from "./restaurant-list.api.model";
import restaurantList from "../../../../public/restaurantList.json";

export const getRestaurantListFromModel = async (): Promise<
  RestaurantApi[]
> => {
  // const uri = cacheBuster(`/restaurantList.json`);

  // const response = await fetch(uri);
  // return response.json();
  return restaurantList as RestaurantApi[];
};
