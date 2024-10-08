import { alpha, createTheme, ThemeOptions } from '@mui/material/styles';
import { darken, lighten } from '@mui/material';

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#f8f9f4',
    },
    text: {
      primary: '#000000',
      secondary: lighten('#000000', 0.7),
    },
    primary: {
      main: '#f44336',
    },
  },
  typography: {
    allVariants: {},
    h1: {
      fontFamily: '"Nasalization", sans-serif',
      fontSize: '2rem',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '1.3rem',
    },
    body1: {
      fontFamily: '"Orbitron", sans-serif',
      letterSpacing: '0.05rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.7rem',
      fontWeight: 400,
      letterSpacing: '0.05rem',
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.background.default,
          border: alpha(theme.palette.text.primary, 0.5),
        }),
        arrow: ({ theme }) => ({
          '&:before': {
            backgroundColor: theme.palette.text.primary,
            border: alpha(theme.palette.text.primary, 0.5),
          },
          // color: theme.palette.background.default,
        }),
      },
    },
  },
};

export const themeLight = createTheme(theme);
export const themeDark = createTheme(
  Object.assign({}, theme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#222222',
      },
      text: {
        primary: '#ffffff',
        secondary: darken('#ffffff', 0.7),
      },
    },
  }),
);
