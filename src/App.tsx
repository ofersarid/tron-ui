import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainLayout } from '@/main-layout';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { themeLight, themeDark } from '@/theme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeDark}>
        <MainLayout />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
