import { createJsonSchema } from 'common/helpers';
import { getDBInstance } from 'core/servers';
import { mapRestaurantJsonSchemaToMongoJsonSchema } from 'dals/restaurant/restaurant.model';
import tsconfing from '../../../../tsconfig.json';

export const run = async () => {
  console.log('Version 1.0.0');
  const db = getDBInstance();

  const jsonSchema = createJsonSchema(
    './src/dals/restaurant/restaurant.model.ts',
    'Restaurant',
    tsconfing.compilerOptions
  );
  await db.createCollection('restaurants', {
    validator: {
      $jsonSchema: mapRestaurantJsonSchemaToMongoJsonSchema(jsonSchema),
    },
  });
};
