import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col, BoxProps, Typography } from '@/atoms';
import styled from 'styled-components';

const meta = {
  title: 'atoms/FlexBox',
  component: Row,
  subcomponents: { Col },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<BoxProps> = {
  render: (args) => (
    <Row>
      <Row {...args}>
        <SType>Child 1</SType>
        <SType>Child 2</SType>
        <SType>Child 3</SType>
      </Row>
      <Col {...args}>
        <SType>Child 1</SType>
        <SType>Child 2</SType>
        <SType>Child 3</SType>
      </Col>
    </Row>
  ),
};

/* --- Styled Components --- */
const SType = styled(Typography)`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.palette.text.primary};
`;

Playground.args = {};
Playground.argTypes = {};
