export const envConstants = {
  isProduction: process.env.NODE_ENV === 'production',
  PORT: process.env.INTERNAL_PORT,
  STATIC_FILES_PATH: process.env.STATIC_FILES_PATH,
  isApiMock: process.env.API_MOCK === 'true',
  MONGODB_URI: process.env.MONGODB_URI,
};
