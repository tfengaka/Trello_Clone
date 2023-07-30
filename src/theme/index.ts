import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        text: {
          secondary: '#172B4D',
        },
        background: {
          default: '#fff',
          paper: '#ebecf0',
        },
      },
    },
    dark: {
      palette: {
        text: {
          secondary: '#B6C2CF',
        },
        background: {
          default: '#1D2125',
          paper: '#282E33',
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          textTransform: 'initial',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          },
        }),
        endIcon: {
          margin: 0,
          paddingBottom: '3px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '4px',
          '&:hover': {
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          outline: 'none',
          fontWeight: 400,
          '&.MuiOutlinedInput-notchedOutline': {
            border: '2px solid rgba(255, 255, 255, 0.25)',
          },
          '&.MuiOutlinedInput-input': {
            color: '#fff',
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: '#fff',
          backgroundColor: '#f44336',
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          gap: '4px',
        },
        avatar: {
          fontSize: 14,
          fontWeight: 500,
          background: '#ebecf0',
          color: '#172B4D',
          border: '1px solid transparent !important',
          width: '28px',
          height: '28px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        img: {
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        },
      },
    },
  },
});

export default theme;
