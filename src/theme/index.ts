import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#002248',
          contrastText: '#fff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#0078ff',
          contrastText: '#121212',
        },
      },
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        standard: ({ theme }) => ({
          backgroundColor: theme.palette.primary.contrastText,
        }),
        icon: ({ theme }) => ({
          color: theme.palette.primary.main,
          transition: 'all 0.3s ease',
        }),
      },
    },
  },
});

export default theme;
