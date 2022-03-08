import fs from 'fs';
import { Question, QuestionCollection } from 'inquirer';

const versions = fs
  .readdirSync(`${__dirname}/versions`)
  .map((fileName) => fileName.replace('.ts', ''));

export const mongoDBQuestions: Question[] = [
  {
    name: 'connectionString',
    type: 'input',
    message: 'Connection string (Press enter to use default):',
  },
];

export const migrationVersionQuestion: QuestionCollection = [
  {
    name: 'version',
    type: 'list',
    message: 'Which version do you want to apply?',
    choices: versions,
  },
];
