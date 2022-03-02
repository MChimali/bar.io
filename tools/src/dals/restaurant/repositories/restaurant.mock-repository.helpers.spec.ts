import { emptyRestaurant, Restaurant } from '../restaurant.model';
import { ObjectId } from 'mongodb';
import * as helper from './restaurant.mock-repository.helpers';

describe('restaurant.mock-respository.helpers', () => {
  describe('paginateRestaurantList', () => {
    it('should return empty array when it feeds with a restaurant undefined', () => {
      // Arrange
      const restaurantList: Restaurant[] = undefined;
      // Act
      const result: Restaurant[] = helper.paginateRestaurantList(
        restaurantList,
        undefined,
        undefined
      );
      // Assert
      expect(result).toEqual([]);
    });
    it('should return empty array when it feeds with a restaurant null', () => {
      // Arrange
      const restaurantList: Restaurant[] = null;
      // Act
      const result: Restaurant[] = helper.paginateRestaurantList(
        restaurantList,
        null,
        null
      );
      // Assert
      expect(result).toEqual([]);
    });
    it('should return an array with a restaurant when it feeds with two restaurants', () => {
      // Arrange
      const restaurantList: Restaurant[] = [
        {
          _id: new ObjectId('621f192fb7373752dce0cb9c'),
          name: 'restaurant1',
          urlName: 'restaurant1',
          phone: 'phone1',
          address: 'address1',
          locationUrl: 'locationUrl1',
          menuDate: new Date('2222-03-02'),
          communitySourceUrl: 'communitySourceUrl1',
          official: false,
          description: 'description1',
          theme: 'default',
          rationsDefinitions: [],
          menu: [],
        },
        {
          _id: new ObjectId('621f192fb7373752dce0cb9d'),
          name: 'restaurant2',
          urlName: 'restaurant2',
          phone: 'phone2',
          address: 'address2',
          locationUrl: 'locationUrl2',
          menuDate: new Date('2222-03-02'),
          communitySourceUrl: 'communitySourceUrl2',
          official: false,
          description: 'description2',
          theme: 'default',
          rationsDefinitions: [],
          menu: [],
        },
      ];
      // Act
      const result: Restaurant[] = helper.paginateRestaurantList(
        restaurantList,
        1,
        1
      );
      // Assert
      expect(result).toEqual([
        {
          _id: new ObjectId('621f192fb7373752dce0cb9c'),
          name: 'restaurant1',
          urlName: 'restaurant1',
          phone: 'phone1',
          address: 'address1',
          locationUrl: 'locationUrl1',
          menuDate: new Date('2222-03-02'),
          communitySourceUrl: 'communitySourceUrl1',
          official: false,
          description: 'description1',
          theme: 'default',
          rationsDefinitions: [],
          menu: [],
        },
      ]);
    });
  });
  describe('insertRestaurant', () => {
    it('should return an empty restaurant when it feeds with restaurant equals undefined', async () => {
      // Arrange
      const restaurant: Restaurant = undefined;
      // Act
      const result: Restaurant = await helper.insertRestaurant(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurant());
    });
    it('should return an empty restaurant when it feeds with restaurant equals null', async () => {
      // Arrange
      const restaurant: Restaurant = null;
      // Act
      const result: Restaurant = await helper.insertRestaurant(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurant());
    });
    it('should return an new restaurant when it feeds with a item', async () => {
      // Arrange
      const restaurant: Restaurant = {
        _id: new ObjectId('621f192fb7373752dce0cb9c'),
        name: 'restaurant1',
        urlName: 'restaurant1',
        phone: 'phone1',
        address: 'address1',
        locationUrl: 'locationUrl1',
        menuDate: new Date('2022-03-02'),
        communitySourceUrl: 'communitySourceUrl1',
        official: false,
        description: 'description1',
        theme: 'default',
        rationsDefinitions: [],
        menu: [],
      };
      const getStup = jest
        .spyOn(helper, 'insertRestaurant')
        .mockResolvedValue(restaurant);
      // Act
      const result: Restaurant = await helper.insertRestaurant(restaurant);
      // Assert
      expect(getStup).toHaveBeenCalledWith(restaurant);
      expect(result).toEqual(restaurant);
    });
  });
  describe('updateRestaurant', () => {
    it('should return an empty restaurant when it feeds with restaurant equals undefined', async () => {
      // Arrange
      const restaurant: Restaurant = undefined;
      // Act
      const result: Restaurant = await helper.updateRestaurant(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurant());
    });
    it('should return an empty restaurant when it feeds with restaurant equals null', async () => {
      // Arrange
      const restaurant: Restaurant = null;
      // Act
      const result: Restaurant = await helper.updateRestaurant(restaurant);
      // Assert
      expect(result).toEqual(emptyRestaurant());
    });
    it('should return an new restaurant when it feeds with a item', async () => {
      // Arrange
      const restaurant: Restaurant = {
        _id: new ObjectId('621f192fb7373752dce0cb9c'),
        name: 'restaurant1',
        urlName: 'restaurant1',
        phone: 'phone1',
        address: 'address1',
        locationUrl: 'locationUrl1',
        menuDate: new Date('2022-03-02'),
        communitySourceUrl: 'communitySourceUrl2',
        official: false,
        description: 'description1',
        theme: 'default',
        rationsDefinitions: [],
        menu: [],
      };
      const getStup = jest
        .spyOn(helper, 'updateRestaurant')
        .mockResolvedValue(restaurant);
      // Act
      const result: Restaurant = await helper.updateRestaurant(restaurant);
      // Assert
      expect(getStup).toHaveBeenCalledWith(restaurant);
      expect(result).toEqual(restaurant);
    });
  });
});
