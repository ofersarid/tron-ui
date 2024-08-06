import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainLayout } from '@/main-layout';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight, themeDark } from '@/theme';

function App() {
  return (
    <ThemeProvider theme={themeDark}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
