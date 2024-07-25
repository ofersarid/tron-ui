import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from '@/main-layout';

const meta = {
  title: 'app/MainLayout',
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

//"no-use-before-define": "off",
//"@typescript-eslint/no-use-before-define": "off"
