import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import * as classes from "./restaurant-invitation-card.component.styles";

const AboutUs: React.FC = () => {
  const theme = useTheme();
  return (
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
  );
};

const InfoMail: React.FC = () => {
  const theme = useTheme();
  return (
    <div className={classes.info(theme)}>
      <a href="mailto:info@gastrocarta.net" target="_blank">
        <EmailIcon className={classes.emailIcon(theme)} />
      </a>
      <Typography variant="body2" component="h2">
        Si eres el propiertario de un establecimiento puedes publicar tu carta
        de forma gratuita, ponte en contacto con nosotros en{" "}
        <a
          href="mailto:info@gastrocarta.net"
          target="_blank"
          className={classes.emailSend}
        >
          info@gastrocarta.net
        </a>
      </Typography>
    </div>
  );
};

export const RestaurantInvitationCard: React.FC = () => {
  return (
    <div className={classes.creditsContainer}>
      <AboutUs />
      <InfoMail />
    </div>
  );
};

