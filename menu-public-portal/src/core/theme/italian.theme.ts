import { createTheme } from "@mui/material/styles";
import { varsRestaurantType } from "./model";

export const italianTheme = createTheme({
  palette: {
    primary: {
      main: "#128400",
    },
    secondary: {
      main: varsRestaurantType.italian.secondaryColor,
    },
    text: {
      primary: "#232323",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Dosis",
    h3: {
      borderBottom: "3px solid #EB1B1B",
    },
  },
});
