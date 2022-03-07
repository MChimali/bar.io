import { mapToCollection } from 'common/mappers';
import { routes } from 'core/router';
import * as apiModel from './server-sitemap.api-model';

const mapSitemapUrlFromApiToVm = (restaurant: apiModel.RestaurantApi): string =>
  routes.restaurant(restaurant.urlName);

export const mapSitemapUrlListFromApiToVm = (
  restaurantList: apiModel.RestaurantApi[]
): string[] => mapToCollection(restaurantList, mapSitemapUrlFromApiToVm);
