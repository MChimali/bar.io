import React from 'react';
import { AppLayout } from 'layouts';
import { CategoriesListContainer } from 'pods/categories-list/categories-list.container';

export const CategoriesListScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <CategoriesListContainer />
      </AppLayout>
    </>
  );
};
