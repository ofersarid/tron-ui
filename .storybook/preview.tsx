import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { addons } from '@storybook/preview-api';
import { themeDark, themeLight } from '../src/theme';
import { themes } from '@storybook/theming';
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
    docs: {
      toc: true,
      theme: themes.dark,
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { globals }) => {
      const isDarkMode = globals.theme === 'dark';

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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
