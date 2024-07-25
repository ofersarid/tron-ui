import type { Meta, StoryObj } from '@storybook/react';
import { Typography, FlexBox } from '@/atoms';

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
    options: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
    ],
  },
  className: {
    control: false,
  },
};

export const ShowCase: StoryObj<typeof Typography> = {
  render: (args) => (
    <FlexBox direction="col" align="center">
      <Typography variant="h1">H1: {args.children}</Typography>
      <Typography variant="h2">H2: {args.children}</Typography>
      {/* <Typography variant="h3">H3: {args.children}</Typography>
      <Typography variant="h4">H4: {args.children}</Typography>
      <Typography variant="h5">H5: {args.children}</Typography>
      <Typography variant="h6">H6: {args.children}</Typography> */}
      <Typography variant="subtitle1">Subtitle-1: {args.children}</Typography>
      {/* <Typography variant="subtitle2">Subtitle-2: {args.children}</Typography> */}
      <Typography variant="body1">Body-1: {args.children}</Typography>
      {/* <Typography variant="body2">Body-2: {args.children}</Typography> */}
      <Typography variant="caption">caption: {args.children}</Typography>
    </FlexBox>
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
