import { resolve } from 'path';
import { getDBInstance } from 'core/servers';
import {
  CompilerOptions,
  generateSchema,
  getProgramFromFiles,
  PartialArgs,
} from 'typescript-json-schema';
import { getRestaurantContext } from './restaurant.context';
import * as model from './restaurant.model';

export const restaurantDbRepository = {
  getRestaurantByUrlName: async (
    urlName: string
  ): Promise<model.Restaurant> => {
    try {
      return await getRestaurantContext().findOne({ urlName: urlName });
    } catch (error) {
      throw error;
    }
  },
  saveRestaurant: async (restaurant: model.Restaurant) => {
    try {
      await getRestaurantContext().insertOne(restaurant);
    } catch (error) {
      throw error;
    }
  },
  createRestaurantsCollection: async () => {
    try {
      const db = getDBInstance();
      const collections = await db
        .listCollections({ name: 'restaurants' }, { nameOnly: true })
        .toArray();
      if (collections.length === 0) {
        const validator = createSchemaValidator();
        await db.createCollection('restaurants', {
          validationLevel: 'strict',
          validator,
        });
      }
    } catch (error) {
      throw error;
    }
  },
};

const createSchemaValidator = () => {
  const settings: PartialArgs = {
    required: true,
    ref: false,
  };

  const compilerOptions: CompilerOptions = {
    strictNullChecks: true,
  };

  const models = getProgramFromFiles(
    [resolve(`${__dirname}/restaurant.model.ts`)],
    compilerOptions
  );

  const schema = generateSchema(models, 'Restaurant', settings);

  const { $schema, definitions, ...jsonSchema } = schema;

  const jsonSchemaString = JSON.stringify(jsonSchema);

  const validator = {
    $jsonSchema: JSON.parse(jsonSchemaString.replace('"type":', '"bsonType":')),
  };

  return validator;
};
