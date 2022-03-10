import { Question } from 'inquirer';

export const mongoDBQuestions: Question[] = [
  {
    name: 'connectionString',
    type: 'input',
    message: 'Connection string (Press enter to use default) :',
  },
];