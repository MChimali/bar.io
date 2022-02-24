import { RestaurantApi } from "./restaurant-list.api.model";
import restaurantList from "../../../../public/restaurantList.json";

export const getRestaurantListFromModel = async (): Promise<
  RestaurantApi[]
> => {
  return restaurantList as RestaurantApi[];
};
