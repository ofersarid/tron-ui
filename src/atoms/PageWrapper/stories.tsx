import { PageWrapper, Typography } from '@/atoms';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/PageWrapper',
  component: PageWrapper,
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof PageWrapper> = {
  render: (args) => (
    <PageWrapper {...args}>
      <Typography>Lorem Ipsum</Typography>
    </PageWrapper>
  ),
};

Playground.args = {
  centerContent: false,
};

Playground.argTypes = {
  children: {
    control: false,
  },
};
