import { prompt } from 'inquirer';
import { envConstants } from 'core/constants';
import { mongoDBQuestions } from './questions';

const consoleRunnerList = ['save-restaurant-list', 'save-restaurant'];

(async () => {
  const mongoDbFields = await prompt(mongoDBQuestions);
  const connectionString = Boolean(mongoDbFields.connectionString)
    ? mongoDbFields.connectionString
    : envConstants.MONGODB_URI;
  let exit = false;

  while (!exit) {
    const { consoleRunner } = await prompt([
      {
        name: 'consoleRunner',
        type: 'list',
        message: 'Which console-runner do you want to run?',
        choices: [...consoleRunnerList, 'exit'],
      },
    ]);

    if (consoleRunner !== 'exit') {
      const { run } = require(`./${consoleRunner}`);
      await run(connectionString);
    } else {
      exit = true;
    }
  }
})();
