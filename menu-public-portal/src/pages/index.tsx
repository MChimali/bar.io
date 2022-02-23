import type { GetStaticProps, NextPage } from "next";
import { RestaurantListContainer } from "pods/restaurant-list";
import { RestaurantInfo } from "pods/restaurant-list/restaurant-list.vm";
import { getRestaurantList } from "pods/restaurant-list/";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

export const getStaticProps: GetStaticProps = async () => {
  const restaurantCollection: RestaurantInfo[] = await getRestaurantList();

  return {
    props: { restaurantCollection },
    revalidate: 600,
  };
};

interface Props {
  restaurantCollection: RestaurantInfo[];
}

const Home: NextPage<Props> = (props) => {
  const { restaurantCollection } = props;
  return (
    <>
      <CssBaseline />
      <RestaurantListContainer restaurantCollection={restaurantCollection} />;
    </>
  );
};

export default Home;
