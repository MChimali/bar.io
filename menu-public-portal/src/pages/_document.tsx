import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';

const { extractCritical } = createEmotionServer(cache);

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <CacheProvider value={cache}>
              <App {...props} />
            </CacheProvider>
          ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = extractCritical(initialProps.html);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion={`${cache.key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
