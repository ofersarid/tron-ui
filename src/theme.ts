import { createTheme } from '@mui/material/styles';

const theme = {
  palette: {
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Nasalization", sans-serif',
      fontSize: '2rem',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1.3rem',
    },
    body1: {
      fontWeight: 400,
    },
  },
};

const darkMode = {
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
  },
};

export const themeDark = createTheme(Object.assign(theme, darkMode));
export const themeLight = createTheme(Object.assign(theme));
