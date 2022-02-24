import { RestaurantVm } from "../restaurant-list.vm";
import { routes } from "core/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { chooseTheme } from "core/theme";
import { CardContentComponent } from "./cardContent.component";
import { useTheme } from "@mui/material/styles";
import * as classes from "./restaurant-card.component.styles";

interface Props {
  restaurant: RestaurantVm;
}

export const RestaurantCardComponent: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { restaurant } = props;
  const {
    id,
    name,
    address,
    description,
    locationUrl,
    phone,
    urlName,
    theme: themeName,
  } = restaurant;
  return (
    <ThemeProvider theme={chooseTheme(themeName)} key={id}>
      <div className={classes.Container}>
        <Card className={classes.cardContainer(theme)}>
          <CardContentComponent
            name={name}
            address={address}
            description={description}
            locationUrl={locationUrl}
            phone={phone}
            urlName={urlName}
          />
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
};
