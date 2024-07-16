import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const ShowCase: StoryObj<typeof Button> = {
  render: (args) => (
    <>
      <Button {...args} primary size="large" />
      <Button {...args} primary size="small" />
      <Button {...args} primary={false} size="large" />
      <Button {...args} primary={false} size="small" />
    </>
  ),
};

ShowCase.args = { onClick: fn(), label: 'Button' };
ShowCase.argTypes = {
  backgroundColor: { control: false },
  primary: { control: false },
  size: { control: false },
};

export const Playground: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
};

Playground.args = { onClick: fn(), primary: true, label: 'Button' };
Playground.argTypes = {
  backgroundColor: { control: 'select', options: ['red', 'green', 'blue'] },
};
