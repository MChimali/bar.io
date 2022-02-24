import * as api from "./api/restaurant-list.api.model";
import * as viewModel from "./restaurant-list.vm";
import { mapToCollection } from "common/mappers";

export const mapRestaurantListfromApiToVm = (
  restaurantList: api.RestaurantApi[]
): viewModel.RestaurantVm[] =>
  mapToCollection(restaurantList, mapRestaurantfromApiToVm);

const mapRestaurantfromApiToVm = (
  restaurant: api.RestaurantApi
): viewModel.RestaurantVm => ({
  id: restaurant._id,
  name: restaurant.name,
  urlName: restaurant.urlName,
  phone: restaurant.phone,
  address: restaurant.address,
  locationUrl: restaurant.locationUrl,
  description: restaurant.description,
  theme: restaurant.theme,
});
