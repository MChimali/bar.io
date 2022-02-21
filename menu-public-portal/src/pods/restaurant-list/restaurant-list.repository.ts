import { restaurantListMockData } from "./restaurant-list.mock";
import { RestaurantInfo } from "./restaurant-list.vm";
import fs from "fs";

export const getRestaurantList = async (): Promise<RestaurantInfo[]> => {
  const restaurantList = [...restaurantListMockData];

  return await restaurantList;
};
