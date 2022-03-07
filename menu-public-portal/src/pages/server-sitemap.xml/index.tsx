import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { envConstants } from 'core/constants';
import { getSitemapUrlList } from 'pods/server-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlList = await getSitemapUrlList();

  const fields = urlList.map<ISitemapField>((url) => ({
    loc: `${envConstants.SITE_URL}${url}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));

  return getServerSideSitemap(ctx, fields);
};

export default () => {};
