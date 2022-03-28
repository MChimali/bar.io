import * as restaurantApi from './api/restaurant.api.model';
import {
  mapDatefromApiToModel,
  mapFromRestaurantApiToRestaurantVm,
  mapFromItemsApiToItemsVm,
} from './restaurant.mapper';
import * as mappers from './restaurant.mapper';
import * as restaurantVm from './restaurant.vm';
import { emptyRestaurantInfo } from './restaurant.vm';

describe('restaurant.mapper', () => {
  describe('mapFromRestaurantApiToRestaurantVm', () => {
    it('should return emptyRestaurantInfo when it feeds restaurant equals to undefined', () => {
      // Arrange
      const restaurant: restaurantApi.RestaurantApi = undefined;
      // Act
      const result: restaurantVm.RestaurantInfo =
        mapFromRestaurantApiToRestaurantVm(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurantInfo());
    });
    it('should return emptyRestaurantInfo when it feeds restaurant equals to null', () => {
      // Arrange
      const restaurant: restaurantApi.RestaurantApi = null;
      // Act
      const result: restaurantVm.RestaurantInfo =
        mapFromRestaurantApiToRestaurantVm(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurantInfo());
    });
    it('should return mepped restaurant when it feeds a restaurant to map', () => {
      // Arrange
      const restaurant: restaurantApi.RestaurantApi = {
        id: 'test-id',
        name: 'test-name',
        urlName: 'test-urlName',
        phone: 'test-phone',
        address: 'test-address',
        locationUrl: 'test-locationUrl',
        menuDate: '2022-02-14T00:00:00.000Z',
        communitySourceUrl: 'test-communitySourceUrl',
        official: false,
        description: 'test-description',
        theme: 'default',
        menu: [
          {
            name: 'test-categoryName',
            items: [
              {
                name: 'test-name',
                price: 2,
              },
            ],
          },
        ],
      };
      // Act
      const result: restaurantVm.RestaurantInfo =
        mapFromRestaurantApiToRestaurantVm(restaurant);
      // Assert
      expect(result).toEqual({
        id: 'test-id',
        name: 'test-name',
        urlName: 'test-urlName',
        phone: 'test-phone',
        address: 'test-address',
        locationUrl: 'test-locationUrl',
        menuDate: 'Actualizada el 14 de febrero de 2022',
        communitySourceUrl: 'test-communitySourceUrl',
        official: false,
        description: 'test-description',
        theme: 'default',
        menu: [
          {
            name: 'test-categoryName',
            items: [
              {
                name: 'test-name',
                description: null,
                price: 2,
                priceByRation: null,
                unit: null,
                allergenIconsUrl: null,
              },
            ],
          },
        ],
      });
    });
  });
  describe('mapDatefromApiToModel', () => {
    it('should return a non mapped date when it feeds a date equals to undefined', () => {
      // Arrange
      const date: string = undefined;
      // Act
      const result: string = mapDatefromApiToModel(date);
      // Assert
      expect(result).toEqual('Actualizada el NaN de Invalid Date de NaN');
    });
    it('should return a mapped date when it feeds a date equals to null', () => {
      // Arrange
      const date: string = null;
      // Act
      const result: string = mapDatefromApiToModel(date);
      // Assert
      expect(result).toEqual('Actualizada el 1 de enero de 1970');
    });
    it('should return a mapped date when it feeds a date with an item', () => {
      // Arrange
      const date: string = '2022-02-14T00:00:00.000Z';
      // Act
      const result: string = mapDatefromApiToModel(date);
      // Assert
      expect(result).toEqual('Actualizada el 14 de febrero de 2022');
    });
  });
  describe('mapFromItemsApiToItemsVm', () => {
    it('should return mapped Item with null property allergenIconsUrl when it feeds no allergens', () => {
      // Arrange
      const item: restaurantApi.Item = {
        name: 'burguer',
      };
      // Act
      const result: restaurantVm.Item = mapFromItemsApiToItemsVm(item);
      // Assert
      expect(result).toEqual({
        name: 'burguer',
        description: null,
        price: null,
        priceByRation: null,
        unit: null,
        allergenIconsUrl: null,
      });
    });

    it('should return mapped item with empty array in allergenIconsUrl when it feeds empty allergens list', () => {
      // Arrange
      const item: restaurantApi.Item = {
        name: 'burguer',
        allergens: [],
      };
      const urlMapper = jest.spyOn(mappers, 'AllergenToUrlObject');
      // Act
      const result: restaurantVm.Item = mapFromItemsApiToItemsVm(item);
      // Assert
      expect(result).toEqual({
        name: 'burguer',
        description: null,
        price: null,
        priceByRation: null,
        unit: null,
        allergenIconsUrl: [],
      });
      expect(urlMapper).not.toHaveBeenCalled();
    });

    it('should return mapped item with array of strings at allergenIconsUrl when it feeds allergens list ', () => {
      // Arrange

      const item: restaurantApi.Item = {
        name: 'burguer',
        allergens: ['lactosa', 'altramuces'],
      };
      const urlMapper = jest.spyOn(mappers, 'AllergenToUrlObject');
      // Act
      const result: restaurantVm.Item = mapFromItemsApiToItemsVm(item);
      // Assert
      expect(result).toEqual({
        name: 'burguer',
        description: null,
        price: null,
        priceByRation: null,
        unit: null,
        allergenIconsUrl: [
          {
            name: 'lactosa',
            iconUrl: '/allergen-icons/webp/lactosa.webp',
          },
          {
            name: 'altramuces',
            iconUrl: '/allergen-icons/webp/altramuces.webp',
          },
        ],
      });
      expect(urlMapper).toHaveBeenCalledTimes(2);
    });
  });
});
