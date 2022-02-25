import { RestaurantVm } from './restaurant-list.vm';
import { getRestaurantListFromModel } from './api/restaurant-list.api';
import { mapRestaurantListfromApiToVm } from './restaurant-list.mapper';

export const getRestaurantList = async (): Promise<RestaurantVm[]> =>
  mapRestaurantListfromApiToVm(await getRestaurantListFromModel());
