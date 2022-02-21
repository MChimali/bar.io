import Link from "next/link";
import Head from "next/head";
import { routes } from "core/router";
import Typography from "@mui/material/Typography";
import { RestaurantInfo } from "./restaurant-list.vm";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import * as classes from "./restaurant-list.styles";
interface Props {
  restaurantList: RestaurantInfo[];
}

const RestaurantList: React.FC<Props> = (props) => {
  const { restaurantList } = props;
  const theme = useTheme();
  const restaurantElements = restaurantList.map((restaurant) => {
    const { name, urlName, address, description, locationUrl, phone } =
      restaurant;
    return (
      <>
        <Card
          sx={{ maxWidth: 345 }}
          key={name}
          className={classes.CardContainer(theme)}
        >
          <CardContent>
            <div className={classes.infoRow(theme)}>
              <Typography variant="h4" component="h2">
                {phone}
              </Typography>
              <PhoneEnabledIcon sx={{ color: "secondary.main" }} />
            </div>
            <div className={classes.infoRow(theme)}>
              <Typography variant="h5" component="h2">
                {address}
              </Typography>
              <Link href={locationUrl}>
                <a target="_blank">
                  <PlaceIcon sx={{ color: "secondary.main" }} />
                </a>
              </Link>
            </div>
            <Link href={routes.restaurant(urlName)}>
              <a className={classes.anchorDefault}>
                <Typography
                  variant="h1"
                  component="h1"
                  className={classes.restaurantName(theme)}
                >
                  {name}
                </Typography>
              </a>
            </Link>
            <Typography variant="h2" component="h2">
              {description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActionContainer(theme)}>
            <Button
              variant="contained"
              href={routes.restaurant(urlName)}
              className={classes.buttonRestaurantList}
            >
              VER CARTA
            </Button>
          </CardActions>
        </Card>
      </>
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
        <div className={classes.subHeading}>
          <Typography className={classes.appName}>bar.io</Typography>
          <Typography>{`© LEMONCODE 2022 { 🍋 }`}</Typography>
        </div>
        {/* TODO: apply base global styles */}
        <ul style={{ margin: 0, padding: 0 }}>{restaurantElements}</ul>
      </main>

      <footer>
        <p>Lemoncode</p>
      </footer>
    </div>
  );
};

export { RestaurantList };
