import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProviderComponent } from 'core/theme';

const App: React.FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeProviderComponent>
        <Component {...pageProps} />
      </ThemeProviderComponent>
    </>
  );
};

export default App;
