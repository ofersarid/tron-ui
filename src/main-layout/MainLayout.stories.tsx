import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { MainLayout } from '.';

const meta = {
  title: 'App/MainLayout',
  component: MainLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof MainLayout> = {
  render: (args) => <MainLayout {...args} />,
};

Playground.args = {};
Playground.argTypes = {};
