import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#272727',
        },
        secondary: {
          main: '#ff80ab',
        },
      },
      props: {
        MuiAppBar: {
          color: 'secondary',
        },
      },
});