import * as apiModel from './server-sitemap.api-model';
import { mapSitemapUrlListFromApiToVm } from './server-sitemap.mappers';

describe('pods/server-sitemap/server-sitemap.mapper', () => {
  describe('mapSitemapUrlListFromApiToVm', () => {
    it('should return an empty arra when it feeds restaurantList equals undefined', () => {
      // Arrange
      const restaurantList: apiModel.RestaurantApi[] = undefined;
      // Act
      const result = mapSitemapUrlListFromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return an empty arra when it feeds restaurantList equals null', () => {
      // Arrange
      const restaurantList: apiModel.RestaurantApi[] = null;
      // Act
      const result = mapSitemapUrlListFromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return mapped array when it feeds restaurantList with values', () => {
      // Arrange
      const restaurantList: apiModel.RestaurantApi[] = [
        { urlName: 'restaurant1' },
        { urlName: 'restaurant2' },
        { urlName: 'restaurant3' },
        { urlName: 'restaurant4' },
      ];
      // Act
      const result = mapSitemapUrlListFromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([
        '/restaurant/restaurant1',
        '/restaurant/restaurant2',
        '/restaurant/restaurant3',
        '/restaurant/restaurant4',
      ]);
    });
  });
});
