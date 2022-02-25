import React from 'react';
import type { AppProps } from 'next/app';
import '@fontsource/dosis/400.css';
import '@fontsource/dosis/500.css';
import '@fontsource/dosis/600.css';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from 'core/theme';
import { CacheProvider, useDedupeSSRStyles } from 'core/ssr';

function MyApp({ Component, pageProps }: AppProps) {
  useDedupeSSRStyles();
  return (
    <CacheProvider>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
