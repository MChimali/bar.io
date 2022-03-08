import express from 'express';
import path from 'path';
import { createRestApiServer, connectToDBServer } from 'core/servers';
import { envConstants } from 'core/constants';
import {
  logErrorRequestMiddleware,
} from 'common/middlewares';
import { restaurantApi } from 'pods/restaurant';

const restApiServer = createRestApiServer();

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use('/', express.static(staticFilesPath));

restApiServer.use('/api/restaurant', restaurantApi);

restApiServer.use(logErrorRequestMiddleware);

restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log(`Running Server from ${envConstants.MONGODB_URI}`);
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
