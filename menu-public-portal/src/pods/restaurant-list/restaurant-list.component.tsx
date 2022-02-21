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
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import * as classes from "./restaurant-list.styles";
import { ThemeProvider } from "@mui/material/styles";
import { chooseTheme } from "core/theme";
import { useTheme } from "@mui/material/styles";

interface Props {
  restaurantList: RestaurantInfo[];
}

const RestaurantList: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { restaurantList } = props;
  const restaurantElements = restaurantList.map((restaurant) => {
    const {
      name,
      urlName,
      address,
      description,
      locationUrl,
      phone,
      theme: themeName,
    } = restaurant;
    return (
      <ThemeProvider theme={chooseTheme(themeName)} key={name}>
        <div className={classes.Container}>
          <Card className={classes.cardContainer(theme)}>
            <CardContent className={classes.cardContent}>
              <div className={classes.rowIndent}>
                <Typography variant="subtitle1" component="h2">
                  {phone}
                </Typography>
                <a href={`tel: ${phone}`}>
                  <PhoneEnabledIcon sx={{ color: "secondary.main" }} />
                </a>
              </div>
              <div className={classes.rowIndent}>
                <Typography variant="subtitle2" component="h2">
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
                    variant="h3"
                    component="h1"
                    className={classes.nameRestaurant(theme)}
                  >
                    {name}
                  </Typography>
                </a>
              </Link>
              <Typography variant="subtitle2" component="h2">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                href={routes.restaurant(urlName)}
                className={classes.buttonRestaurantList(theme)}
              >
                VER CARTA
              </Button>
            </CardActions>
          </Card>
        </div>
      </ThemeProvider>
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
        <div className={classes.creditsContainer}>
          <div className={classes.credits(theme)}>
            <Link href="#">
              <a target="_blank" className={classes.anchor}>
                <Typography
                  variant="caption"
                  component="h5"
                  className={classes.aboutus}
                >
                  quienes somos
                </Typography>
              </a>
            </Link>
            <Typography
              variant="caption"
              component="h5"
              className={classes.gastrocarta}
            >
              gastrocarta.net
            </Typography>
          </div>
          <div className={classes.info(theme)}>
            <a href="mailto:info@gastrobar.net" target="_blank">
              <EmailIcon className={classes.emailIcon(theme)} />
            </a>
            <Typography variant="body2" component="h2">
              Si eres el propiertario de un establecimiento puedes publicar tu
              carta de forma gratuita, ponte en contacto con nosotros en{" "}
              <a
                href="mailto:info@gastrobar.net"
                target="_blank"
                className={classes.emailSend}
              >
                info@gastrobar.net
              </a>
            </Typography>
          </div>
        </div>
        {restaurantElements}
      </main>
    </div>
  );
};

export { RestaurantList };
