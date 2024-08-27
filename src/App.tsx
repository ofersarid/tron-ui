import React from 'react';
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
