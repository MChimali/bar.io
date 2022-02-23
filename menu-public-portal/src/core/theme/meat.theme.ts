import { createTheme } from "@mui/material/styles";
import { varsRestaurantType } from "./model";

export const meatTheme = createTheme({
  palette: {
    primary: {
      main: "#700000",
    },
    secondary: {
      main: varsRestaurantType.meat.secondaryColor,
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
