import { createTheme } from "@mui/material/styles";

export const fishTheme = createTheme({
  palette: {
    primary: {
      main: "#0D0043",
    },
    secondary: {
      main: "#35A7CB",
    },
    text: {
      primary: "#232323",
      secondary: "#FFFFFF",
    },
  },
  //TODO: copy same variantes to all themes.
  typography: {
    fontFamily: "Dosis",
    h1: {
      fontSize: `${52 / 16}rem`,
    },
    h2: { fontWeight: 600, fontSize: `${22 / 16}rem` },
    h4: {
      fontSize: `${18 / 16}rem`,
      fontWeight: "500",
    },
    h5: {
      fontSize: `${14 / 16}rem`,
    },
  },
});
