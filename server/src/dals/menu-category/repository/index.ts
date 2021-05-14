import { envConstants } from 'core';
import * as mockRepository from './menu-category.mock';
import * as repository from './menu-category.repository';
import { MenuCategoryRepositoryContract } from './menu-category.contract';

export const menuCategoryRepository: MenuCategoryRepositoryContract = envConstants.isMockRepository
  ? mockRepository
  : repository;