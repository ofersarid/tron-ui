import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Col } from '@/atoms';
import Tooltip from '@mui/material/Tooltip';

const meta = {
  title: 'atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof Typography> = {
  render: (args) => <Typography {...args} />,
};

Playground.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  variant: 'body1',
};

Playground.argTypes = {
  variant: {
    control: 'select',
    options: ['h1', 'h2', 'subtitle1', 'body1', 'caption'],
  },
  className: {
    control: false,
  },
};

export const ShowCase: StoryObj<typeof Typography> = {
  render: (args) => (
    <Col align="center">
      <Tooltip title="hi there">
        <Typography variant="h1">H1: {args.children}</Typography>
      </Tooltip>
      <Typography variant="h2">H2: {args.children}</Typography>
      <Typography variant="subtitle1">Subtitle-1: {args.children}</Typography>
      <Typography variant="body1">Body-1: {args.children}</Typography>
      <Typography variant="caption">caption: {args.children}</Typography>
    </Col>
  ),
};

ShowCase.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
ShowCase.argTypes = {
  variant: {
    control: false,
  },
  className: {
    control: false,
  },
};
