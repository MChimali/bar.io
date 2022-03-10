import { Router } from 'express';
import { restaurantRepository } from 'dals';
import {
  mapRestaurantFromApiModelToModel,
  mapRestaurantFromModelToApiModel,
  mapRestaurantListFromModelToApiModel,
} from './restaurant.mappers';

export const restaurantApi = Router();

restaurantApi
  // Use this endpoint to bring us all restaurants
  // http://localhost:3001/api/restaurant
  // if on the other hand you want to filter by number
  // and quantity of restaurants per page use:
  // http://localhost:3001/api/restaurant?page=1&pageSize=2
  // http://localhost:3001/api/restaurant?page=2&pageSize=1

  .get('/', async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const restaurantList = await restaurantRepository.getRestaurantList(
        page,
        pageSize
      );
      res.send(mapRestaurantListFromModelToApiModel(restaurantList));
    } catch (error) {
      next(error);
    }
  })

  // Use this endpoint to bring us an especific restaurant
  // http://localhost:3001/api/restaurant/papulinos
  // where papulinos is the restaurant urlName
  .get('/:urlName', async (req, res, next) => {
    try {
      const { urlName } = req.params;
      const restaurant = await restaurantRepository.getRestaurantByUrlName(
        urlName
      );
      res.send(mapRestaurantFromModelToApiModel(restaurant));
    } catch (error) {
      next(error);
    }
  })
  // Use this endpoint to create a new restaurant
  // http://localhost:3001/api/restaurant/
  // and use a JSON as Restaurant Model
  .post('/', async (req, res, next) => {
    try {
      const { urlName } = req.body;
      const restaurantModel =
        await restaurantRepository.existsRestaurantByUrlName(urlName);

      if (restaurantModel) {
        res.sendStatus(400);
      } else {
        const restaurant = mapRestaurantFromApiModelToModel(req.body);
        await restaurantRepository.saveRestaurant(restaurant);
        res.sendStatus(201);
      }
    } catch (error) {
      next(error);
    }
  })
  // Use this endpoint to modify a restaurant
  // http://localhost:3001/api/restaurant/
  // and use a JSON as Restaurant Model
  .put('/:urlName', async (req, res, next) => {
    try {
      const { urlName } = req.params;
      const restaurantModel = mapRestaurantFromApiModelToModel({
        ...req.body,
        urlName,
      });
      await restaurantRepository.saveRestaurant(restaurantModel);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })
  // Use this endpoint to delete a restaurant
  // you must specify the restaurant id
  // http://localhost:3001/api/restaurant/<id Restaurant>
  .delete('/:urlName', async (req, res, next) => {
    try {
      const { urlName } = req.params;
      const ok = await restaurantRepository.deleteRestaurant(urlName);
      res.sendStatus(ok ? 204 : 404);
    } catch (error) {
      next(error);
    }
  });
