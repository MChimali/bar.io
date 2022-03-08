import path from 'path';
import {
  CompilerOptions,
  generateSchema,
  getProgramFromFiles,
  PartialArgs,
} from 'typescript-json-schema';
import { getDBInstance } from 'core/servers';
import { getRestaurantContext } from 'dals/restaurant/restaurant.context';

const createJsonSchema = () => {
  const models = getProgramFromFiles(
    [path.resolve('./src/dals/restaurant/restaurant.model.ts')],
  );
  const schema = generateSchema(models, 'Restaurant', {
    required: true,
    ref: false,
  });
  // https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/#omissions
  const { $schema, ...jsonSchema } = schema;

  return schema;
};

export const run = async () => {
  console.log('Version 1.0.0');
  const db = getDBInstance();

  const jsonSchema = createJsonSchema();
  console.log({ jsonSchema });
  await db.createCollection('restaurants', {
    validator: {
      $jsonSchema: jsonSchema,
    },
  });
};
