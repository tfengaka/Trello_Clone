import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#172b4d',
        },
        background: {
          default: '#fff',
          paper: '#f1f2f4',
        },
        text: {
          primary: '#172b4d',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#1d6ddc',
        },
        background: {
          default: '#1a1b23',
          paper: '#1d2125',
        },
        text: {
          primary: '#b6c2cf',
        },
      },
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        standard: ({ theme }) => ({
          color: theme.palette.primary.contrastText,
        }),
        icon: ({ theme }) => ({
          color: theme.palette.primary.contrastText,
          transition: 'all 0.3s ease',
        }),
      },
    },
  },
});

export default theme;
