import restaurantList from '../../../../public/restaurantList.json';
import { mapSitemapUrlListFromApiToVm } from './server-sitemap.mappers';

export const getSitemapUrlList = async (): Promise<string[]> => {
  return mapSitemapUrlListFromApiToVm(restaurantList);
};
