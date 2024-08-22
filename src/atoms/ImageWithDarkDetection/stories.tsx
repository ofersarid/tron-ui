import type { Meta, StoryObj } from '@storybook/react';
import { ImageWithDarkDetection, Row } from '@/atoms';

const meta = {
  title: 'atoms/ImageWithDarkDetection',
  component: ImageWithDarkDetection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof ImageWithDarkDetection> = {
  render: (args) => (
    <Row>
      <ImageWithDarkDetection {...args} />
      <ImageWithDarkDetection
        {...args}
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png"
      />
      <ImageWithDarkDetection
        {...args}
        src="https://www.pngall.com/wp-content/uploads/5/Oracle-Logo-Transparent-Images.png"
      />
      <ImageWithDarkDetection
        {...args}
        src="https://companieslogo.com/img/orig/CYBR-8c16a7ec.png"
      />
    </Row>
  ),
};

Playground.args = {
  src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
  isDarkMode: false,
  style: { width: '100px', height: '100px' },
  darkModePadding: '0.5rem',
  alt: 'CyberArk',
  darkModeContrast: '#FFFFFF',
};

Playground.argTypes = {
  darkModeContrast: {
    control: 'color',
  },
};
