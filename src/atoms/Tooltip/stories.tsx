import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Typography, Col, Row, PageWrapper } from '@/atoms';
import styled from 'styled-components';

const meta = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} as Meta;

export default meta;

export const Playground: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <PageWrapper centerContent>
      <Tooltip {...args} />
    </PageWrapper>
  ),
};

Playground.args = {
  children: <Typography>Hover Me</Typography>,
  content: 'Hello there !',
  type: 'info',
  placement: 'bottom',
  followCursor: false,
};

Playground.argTypes = {
  type: {
    control: 'select',
    options: ['info', 'error'],
    description: 'Different styles for info | error.',
  },
  placement: {
    control: 'select',
    options: [
      'bottom-end',
      'bottom-start',
      'bottom',
      'left-end',
      'left-start',
      'left',
      'right-end',
      'right-start',
      'right',
      'top-end',
      'top-start',
      'top',
    ],
    description: 'Tooltip placement..',
  },
  children: {
    control: false,
    description: 'Tooltip reference element.',
  },
  content: {
    description: 'Content to be displayed in the tooltip.',
  },
  followCursor: {
    description:
      'If <code>true</code>, the tooltip will follow the cursor over the wrapped element.',
  },
};

export const ShowCase: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <PageWrapper centerContent>
      <Col align="center">
        <Tooltip content="Hellow There!" placement="top">
          <Typography>Top</Typography>
        </Tooltip>
        <Row justify="space-between">
          <Tooltip content="Hellow There!" placement="left">
            <Typography>Left</Typography>
          </Tooltip>
          <StyledCircle align="center" justify="center">
            <Tooltip content="Hellow There!" placement="bottom" followCursor>
              <Typography align="center">Follow cursor</Typography>
            </Tooltip>
          </StyledCircle>
          <Tooltip content="Hellow There!" placement="right">
            <Typography>Right</Typography>
          </Tooltip>
        </Row>
        <Tooltip content="Hellow There!" placement="bottom">
          <Typography>Bottom</Typography>
        </Tooltip>

        {/* <Tooltip
          content={
            <div>
              <Typography>HTML content </Typography>
            </div>
          }
        >
          <Typography>Hover Me</Typography>
        </Tooltip> */}
      </Col>
    </PageWrapper>
  ),
};

ShowCase.argTypes = {
  content: {
    control: false,
  },
  children: {
    control: false,
  },
  placement: {
    control: false,
  },
  followCursor: {
    control: false,
  },
};

/* --- Styles --- */

const StyledCircle = styled(Col)`
  border: ${(props) => `1px solid ${props.theme.palette.text.secondary}`};
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  flex: 1;
`;
