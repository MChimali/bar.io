import React from 'react';
import { ssrStyleIds } from './ssr.constants';

export const useDedupeSSRStyles = () => {
  React.useEffect(() => {
    Object.values(ssrStyleIds).forEach((id) => {
      const serverSideStyles = document.querySelector(`#${id}`);
      if (serverSideStyles) {
        serverSideStyles.parentElement.removeChild(serverSideStyles);
      }
    });
  }, []);
};
