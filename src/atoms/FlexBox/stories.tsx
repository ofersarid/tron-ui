import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox, Typography } from '@/atoms';
import styled from 'styled-components';

const meta = {
  title: 'atoms/FlexBox',
  component: FlexBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof FlexBox> = {
  render: (args) => (
    <FlexBox {...args}>
      <SType>Child 1</SType>
      <SType>Child 2</SType>
      <SType>Child 3</SType>
    </FlexBox>
  ),
};

/* --- Styled Components --- */
const SType = styled(Typography)`
  padding: 1rem;
  border: 1px solid #000;
`;

Playground.args = {
  direction: 'row',
};
Playground.argTypes = {
  direction: {
    control: 'radio',
    options: ['row', 'column'],
  },
};
