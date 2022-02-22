import { createTheme } from "@mui/material/styles";
import { varsRestaurantType } from "./model";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: varsRestaurantType.default.secondaryColor,
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Dosis",
    h3: {
      borderBottom: "3px solid #C5B100",
    },
  },
});
