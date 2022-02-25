import { createTheme } from '@mui/material/styles';
import { varsRestaurantType } from './model';

export const asianTheme = createTheme({
  palette: {
    primary: {
      main: '#CE1BA7',
    },
    secondary: {
      main: varsRestaurantType.asian.secondaryColor,
    },
    text: {
      primary: '#232323',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Dosis',
    h3: {
      borderBottom: '3px solid #6E0095',
    },
  },
});
