import { createTheme } from '@mui/material/styles';
import { varsRestaurantType } from './model';

export const fishTheme = createTheme({
  palette: {
    primary: {
      main: '#0D0043',
    },
    secondary: {
      main: varsRestaurantType.fish.secondaryColor,
    },
    text: {
      primary: '#232323',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Dosis',
    h3: {
      borderBottom: '3px solid #35A7CB',
    },
  },
});
