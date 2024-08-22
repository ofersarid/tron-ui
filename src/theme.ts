import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
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
};
const dark: ThemeOptions = { ...theme };
dark.palette = {
  mode: 'dark',
  background: {
    default: '#222222',
  },
  text: {
    primary: '#ffffff',
  },
};

dark.typography = { ...theme.typography, allVariants: { color: '#ffffff' } };

export const themeLight = createTheme(Object.assign(theme));
export const themeDark = createTheme(Object.assign(dark));
