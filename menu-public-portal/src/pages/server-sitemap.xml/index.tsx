import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { envConstants } from 'core/constants';
import { getRestaurantList } from 'pods/restaurant-list';
import { RestaurantVm } from 'pods/restaurant-list/restaurant-list.vm';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const restaurantCollection: RestaurantVm[] = await getRestaurantList();
  const resturantUrlName: string[] = restaurantCollection.map(
    (restaurant) => restaurant.urlName
  );

  const fields = resturantUrlName.map(
    (urlName) =>
      ({
        loc: `${envConstants.SITE_URL}/restaurant/${urlName}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.7,
      } as ISitemapField)
  );

  return getServerSideSitemap(ctx, fields);
};

export default () => {};
