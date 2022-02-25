import React from 'react';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { cache } from './cache';

export const CacheProvider: React.FC = (props) => {
  const { children } = props;

  return <EmotionCacheProvider value={cache}>{children}</EmotionCacheProvider>;
};
