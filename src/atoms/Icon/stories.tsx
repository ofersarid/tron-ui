import type { Meta, StoryObj } from '@storybook/react';
import { Icon, PageWrapper, ICON_NAMES, Typography, Col, Row } from '@/atoms';
import styled from 'styled-components';

const meta = {
  title: 'atoms/Icons',
  component: Icon,
  tags: ['autodocs'],
} as Meta;

export default meta;

export const ShowCase: StoryObj<typeof Icon> = {
  render: (args) => (
    <PageWrapper centerContent>
      <Row gap="lg" wrap>
        {Object.values(ICON_NAMES).map((iconName) => (
          <Col align="center">
            <Icon key={iconName} {...args} name={iconName} />
            <Typography>{iconName}</Typography>
          </Col>
        ))}
      </Row>
    </PageWrapper>
  ),
};

ShowCase.args = {
  scale: 1,
};
ShowCase.argTypes = {
  name: {
    control: false,
  },
};

/* --- Styles --- */
