import path from 'path';
import {
  generateSchema,
  getProgramFromFiles,
  CompilerOptions,
} from 'typescript-json-schema';

export const createJsonSchema = (
  filePath: string,
  modelName: string,
  compilerOptions: CompilerOptions
) => {
  const program = getProgramFromFiles(
    [path.resolve(filePath)],
    compilerOptions
  );

  // Omissions: https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/#omissions
  const schema = generateSchema(program, modelName, {
    required: true,
    ref: false, // Omitted definitions from jsonSchema
  });

  const { $schema, ...jsonSchema } = schema;
  return jsonSchema;
};
