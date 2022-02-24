import Link from "next/link";
import CardContent from "@mui/material/CardContent";
import { routes } from "core/router";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PlaceIcon from "@mui/icons-material/Place";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import * as classes from "./cardContent.component.styles";

interface locationCardProps {
  address: string;
  locationUrl: string;
}

const LocationCard: React.FC<locationCardProps> = (props) => {
  const { address, locationUrl } = props;
  return (
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
  );
};

interface phoneCardProps {
  phone: string;
}

const PhoneCard: React.FC<phoneCardProps> = (props) => {
  const { phone } = props;
  return (
    <div className={classes.rowIndent}>
      <Typography variant="subtitle1" component="h2">
        {phone}
      </Typography>
      <a href={`tel: ${phone}`}>
        <PhoneEnabledIcon sx={{ color: "secondary.main" }} />
      </a>
    </div>
  );
};

interface HeaderCardProps {
  phone: string;
  address: string;
  locationUrl: string;
}

const HeaderCard: React.FC<HeaderCardProps> = (props) => {
  const { phone, address, locationUrl } = props;
  return (
    <>
      <PhoneCard phone={phone} />
      <LocationCard address={address} locationUrl={locationUrl} />
    </>
  );
};

interface RestauranNameProps {
  name: string;
  urlName: string;
}

const RestaurantName: React.FC<RestauranNameProps> = (props) => {
  const theme = useTheme();
  const { name, urlName } = props;
  return (
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
  );
};

interface RestaurantDescriptionProps {
  description: string;
}

export const RestaurantDescription: React.FC<RestaurantDescriptionProps> = (
  props
) => {
  const { description } = props;
  return (
    <Typography variant="subtitle2" component="h2">
      {description}
    </Typography>
  );
};

interface PropsCardContent {
  name: string;
  address: string;
  description: string;
  locationUrl: string;
  phone: string;
  urlName: string;
}

export const CardContentComponent: React.FC<PropsCardContent> = (props) => {
  const { name, address, description, locationUrl, phone, urlName } = props;
  return (
    <CardContent className={classes.cardContent}>
      <HeaderCard address={address} locationUrl={locationUrl} phone={phone} />
      <RestaurantName name={name} urlName={urlName} />
      <RestaurantDescription description={description} />
    </CardContent>
  );
};


