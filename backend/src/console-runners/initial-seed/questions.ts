import { Question } from 'inquirer';

export const confirmFile: Question[] = [
  {
    name: 'answer',
    type: 'confirm',
    message: 'Are you sure?',
  },
];
