import * as api from './api/restaurant-list.api.model';
import * as viewModel from './restaurant-list.vm';
import { mapRestaurantListfromApiToVm } from './restaurant-list.mapper';

describe('restaurant-list.mapper', () => {
  describe('mapRestaurantListfromApiToVm', () => {
    it('should return empty array when it feeds restaurantList equals undefinded', () => {
      // Arrange
      const restaurantList: api.RestaurantApi[] = undefined;
      // Act
      const result: viewModel.RestaurantVm[] =
        mapRestaurantListfromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return empty array when it feeds restaurantList equals null', () => {
      // Arrange
      const restaurantList: api.RestaurantApi[] = null;
      // Act
      const result: viewModel.RestaurantVm[] =
        mapRestaurantListfromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([]);
    });
    it('should return mapped array when it feeds restaurantList with one item', () => {
      // Arrange
      const restaurantList: api.RestaurantApi[] = [
        {
          _id: '6214cc374dc76f8accaed60b',
          name: 'restaurant-name-test',
          urlName: 'restaurant-urlName-test',
          phone: 'restaurant-phone-test',
          address: 'restaurant-address-test',
          locationUrl: 'restaurant-locationUrl-test',
          description: 'restaurant-description-test',
          theme: 'default',
        } as api.RestaurantApi,
      ];
      // Act
      const result: viewModel.RestaurantVm[] =
        mapRestaurantListfromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([
        {
          id: '6214cc374dc76f8accaed60b',
          name: 'restaurant-name-test',
          urlName: 'restaurant-urlName-test',
          phone: 'restaurant-phone-test',
          address: 'restaurant-address-test',
          locationUrl: 'restaurant-locationUrl-test',
          description: 'restaurant-description-test',
          theme: 'default',
        } as viewModel.RestaurantVm,
      ]);
    });
    it('should return mapped array when it feeds restaurantList with two item', () => {
      // Arrange
      const restaurantList: api.RestaurantApi[] = [
        {
          _id: '6214cc374dc76f8accaed60b',
          name: 'restaurant-name-test',
          urlName: 'restaurant-urlName-test',
          phone: 'restaurant-phone-test',
          address: 'restaurant-address-test',
          locationUrl: 'restaurant-locationUrl-test',
          description: 'restaurant-description-test',
          theme: 'default',
        } as api.RestaurantApi,
        {
          _id: '6214cd8e92d3a4f5966ecf31',
          name: 'restaurant-name-test',
          urlName: 'restaurant-urlName-test',
          phone: 'restaurant-phone-test',
          address: 'restaurant-address-test',
          locationUrl: 'restaurant-locationUrl-test',
          description: 'restaurant-description-test',
          theme: 'default',
        } as api.RestaurantApi,
      ];
      // Act
      const result: viewModel.RestaurantVm[] =
        mapRestaurantListfromApiToVm(restaurantList);
      // Assert
      expect(result).toEqual([
        {
          id: '6214cc374dc76f8accaed60b',
          name: 'restaurant-name-test',
          urlName: 'restaurant-urlName-test',
          phone: 'restaurant-phone-test',
          address: 'restaurant-address-test',
          locationUrl: 'restaurant-locationUrl-test',
          description: 'restaurant-description-test',
          theme: 'default',
        } as viewModel.RestaurantVm,
        {
          id: '6214cd8e92d3a4f5966ecf31',
          name: 'restaurant-name-test',
          urlName: 'restaurant-urlName-test',
          phone: 'restaurant-phone-test',
          address: 'restaurant-address-test',
          locationUrl: 'restaurant-locationUrl-test',
          description: 'restaurant-description-test',
          theme: 'default',
        } as viewModel.RestaurantVm,
      ]);
    });
  });
});
