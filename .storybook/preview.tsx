import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { themeDark } from '../src/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;

      useEffect(() => {
        document.body.style.backgroundColor =
          themeDark.palette.background.default;
        document.body.style.color = themeDark.palette.text.primary;
      }, []);

      return (
        <ThemeProvider theme={themeDark}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
