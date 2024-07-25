import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
});
