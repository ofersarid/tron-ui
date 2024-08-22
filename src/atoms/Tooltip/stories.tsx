import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Typography, Col, Row } from '@/atoms';

const meta = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta;

export default meta;

export const ShowCase: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Row>
      <Col>
        <Tooltip content="Hellow There!" placement="bottom">
          <Typography>Bottom</Typography>
        </Tooltip>
        <Tooltip content="Hellow There!" placement="top">
          <Typography>Top</Typography>
        </Tooltip>
        <Tooltip content="Hellow There!" placement="left">
          <Typography>Left</Typography>
        </Tooltip>
        <Tooltip content="Hellow There!" placement="right">
          <Typography>Right</Typography>
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
    </Row>
  ),
};

export const Playground: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip {...args}>
      <Typography>Hover Me</Typography>
    </Tooltip>
  ),
};

Playground.args = {
  content: 'Hello there !',
  type: 'info',
  placement: 'bottom',
  followCursor: false,
};

Playground.argTypes = {
  type: {
    control: 'select',
    options: ['info', 'error'],
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
  },
  children: {
    control: false,
  },
};
