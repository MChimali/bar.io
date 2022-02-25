import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { cache, CacheProvider, ssrStyleIds } from 'core/ssr';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const { extractCritical } = createEmotionServer(cache);
    const page = ctx.renderPage({
      enhanceApp: (App) => (props) =>
        (
          <CacheProvider>
            <App {...props} />
          </CacheProvider>
        ),
    });
    const { css, ids } = extractCritical(page.html);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            id={ssrStyleIds.emotion}
            data-emotion={ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
