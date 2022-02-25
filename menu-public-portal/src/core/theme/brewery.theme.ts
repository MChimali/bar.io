import { createTheme } from '@mui/material/styles';
import { varsRestaurantType } from './model';

export const breweryTheme = createTheme({
  palette: {
    primary: {
      main: '#CE9C1B',
    },
    secondary: {
      main: varsRestaurantType.brewery.secondaryColor,
    },
    text: {
      primary: '#232323',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Dosis',
    h3: {
      borderBottom: '3px solid #862447',
    },
  },
});
