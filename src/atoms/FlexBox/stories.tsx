import type { Meta, StoryObj } from '@storybook/react';
import {
  Row as RowAtom,
  Col as ColAtom,
  FlexProps,
  Typography,
  PageWrapper,
} from '@/atoms';
import styled from 'styled-components';
import { alpha } from '@mui/material/styles';

const meta = {
  title: 'atoms/FlexBox',
  component: RowAtom,
  subcomponents: { Col: ColAtom },
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Row: StoryObj<FlexProps> = {
  render: (args) => (
    <PageWrapper centerContent>
      <RowWithBorder {...args}>
        <StyledType>Child 1</StyledType>
        <StyledType>Child 2</StyledType>
        <StyledType>Child 3</StyledType>
      </RowWithBorder>
    </PageWrapper>
  ),
};

Row.args = {
  gap: 'sm',
  streatch: true,
  align: 'center',
  justify: 'flex-start',
};

Row.argTypes = {
  children: {
    control: false,
  },
  gap: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  className: {
    control: false,
  },
};

export const Col: StoryObj<FlexProps> = {
  render: (args) => (
    <PageWrapper centerContent>
      <ColWithBorder {...args}>
        <StyledType>Child 1</StyledType>
        <StyledType>Child 2</StyledType>
        <StyledType>Child 3</StyledType>
      </ColWithBorder>
    </PageWrapper>
  ),
};

Col.args = {
  gap: 'sm',
  streatch: true,
  align: 'flex-start',
  justify: 'flex-start',
};

Col.argTypes = {
  children: {
    control: false,
  },
  gap: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  className: {
    control: false,
  },
};

/* --- Styled Components --- */
const StyledType = styled(Typography)`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.palette.text.primary};
`;

const RowWithBorder = styled(RowAtom)`
  border: 4px dashed ${(props) => alpha(props.theme.palette.text.primary, 0.15)};
`;

const ColWithBorder = styled(ColAtom)`
  border: 4px dashed ${(props) => alpha(props.theme.palette.text.primary, 0.15)};
`;
