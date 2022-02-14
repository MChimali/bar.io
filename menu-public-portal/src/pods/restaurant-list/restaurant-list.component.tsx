import Link from "next/link";
import Head from "next/head";
import { routes } from "core/router";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { RestaurantInfo } from "./restaurant-list.vm";

interface Props {
  restaurantList: RestaurantInfo[];
}

const RestaurantList: React.FC<Props> = (props) => {
  const { restaurantList } = props;

  const restaurantElements = restaurantList.map((restaurant) => {
    const { name, urlName, address, description, locationUrl, phone } =
      restaurant;
    return (
      <div key={name}>
        <Button variant="contained" href={routes.restaurant(urlName)}>
          VER CARTA
        </Button>
      </div>
    );
  });

  return (
    <div>
      <Head>
        <title>Tu Carta - Restaurantes</title>
        <meta
          name="description"
          content="La carta de tu restaurante favorito"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h5" component="h5">
          Listado restaurantes
        </Typography>

        <ul>{restaurantElements}</ul>
      </main>

      <footer>
        <p>Lemoncode</p>
      </footer>
    </div>
  );
};

export { RestaurantList };
