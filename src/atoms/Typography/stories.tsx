import type { Meta, StoryObj } from '@storybook/react';
import { Typography, PageWrapper } from '@/atoms';
import styled from 'styled-components';

const meta = {
  title: 'atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof Typography> = {
  render: (args) => (
    <PageWrapper centerContent>
      <StyledText {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StyledText>
    </PageWrapper>
  ),
};

Playground.args = {
  variant: 'body1',
  align: 'inherit',
  noWrap: false,
};

Playground.argTypes = {
  variant: {
    control: 'select',
    options: ['h1', 'h2', 'subtitle1', 'body1', 'caption'],
  },
  className: {
    control: false,
  },
  children: {
    control: false,
  },
  align: {
    control: 'select',
    options: ['inherit', 'left', 'center', 'right', 'justify'],
  },
};

export const ShowCase: StoryObj<typeof Typography> = {
  render: (args) => (
    <PageWrapper centerContent>
      <Typography variant="h1">
        <StyledTitle>H1:</StyledTitle>
        {args.children}
      </Typography>
      <Typography variant="h2">
        <StyledTitle>H2: </StyledTitle>
        {args.children}
      </Typography>
      <Typography variant="subtitle1">
        <StyledTitle>Subtitle-1: </StyledTitle>
        {args.children}
      </Typography>
      <Typography variant="body1">
        <StyledTitle>Body-1: </StyledTitle>
        {args.children}
      </Typography>
      <Typography variant="caption">
        <StyledTitle>caption: </StyledTitle>
        {args.children}
      </Typography>
    </PageWrapper>
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

/* --- Styles --- */
const StyledText = styled(Typography)`
  width: 20rem;
`;

const StyledTitle = styled.span`
  color: ${(props) => props.theme.palette.primary.main};
  display: inline-block;
  margin-right: 0.5rem;
`;
