import { createTheme } from "@mui/material/styles";
import { varsRestaurantType } from "./model";

export const tapasTheme = createTheme({
  palette: {
    primary: {
      main: "#1BA3CE",
    },
    secondary: {
      main: varsRestaurantType.tapas.secondaryColor,
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