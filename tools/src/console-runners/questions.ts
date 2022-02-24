import { Question } from 'inquirer';

export const inputQuestion: Question[] = [
  {
    name: 'file',
    type: 'input',
    message: 'Insert the urlName to convert to JSON: ',
  },
];

export const confirmFile: Question[] = [
  {
    name: 'answer',
    type: 'confirm',
    message: 'Are you sure?',
  },
];