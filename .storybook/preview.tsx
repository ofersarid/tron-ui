import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { addons } from '@storybook/preview-api';
import { themeDark, themeLight } from '../src/theme';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
import '../src/index.css';
import './index.css';

const channel = addons.getChannel();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
      current: 'dark',
      dark: { ...themes.dark },
      light: { ...themes.light },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
      theme: themes.dark,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      const isDarkMode = useDarkMode();

      // useEffect(() => {
      //   const theme = isDarkMode ? themeDark : themeLight;
      //   document.body.style.backgroundColor = theme.palette.background.default;
      //   // document.body.style.color = theme.palette.text.primary;
      // }, [isDarkMode]);

      return (
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
            <Story />
          </ThemeProvider>
        </StyledEngineProvider>
      );
    },
  ],
};

export default preview;
