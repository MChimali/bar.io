import { prompt } from 'inquirer';
import { mongoDBQuestions, migrationVersionQuestion } from './questions';
import { connectToDBServer, disconnectFromDbServer } from 'core/servers';
import { envConstants } from 'core/constants';

export const run = async () => {
  try {
    const mongoDbFields = await prompt(mongoDBQuestions);
    const connectionString = Boolean(mongoDbFields.connectionString)
      ? mongoDbFields.connectionString
      : envConstants.MONGODB_URI;

    await connectToDBServer(connectionString);

    const { version } = await prompt(migrationVersionQuestion);
    await require(`./versions/${version}`).run();
    await disconnectFromDbServer();
  } catch (error) {
    console.error(error);
  }
};
