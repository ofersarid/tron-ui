import type { Meta, StoryObj } from '@storybook/react';
import { Icon, PageWrapper, ICON_NAMES, Typography, Col, Row } from '@/atoms';
import styled from 'styled-components';

const meta = {
  title: 'atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
} as Meta;

export default meta;

interface ExtendedIconProps extends React.ComponentProps<typeof Icon> {
  showBox: boolean;
}

export const Playgroud: StoryObj<ExtendedIconProps> = {
  render: (args) => (
    <PageWrapper centerContent>
      <StyledGuidLines $hide={!args.showBox}>
        <Icon name={args.name} scale={args.scale} />
      </StyledGuidLines>
    </PageWrapper>
  ),
};

Playgroud.args = {
  name: ICON_NAMES.share,
  scale: 7,
  showBox: false,
};

Playgroud.argTypes = {
  name: {
    control: 'select',
    options: Object.values(ICON_NAMES),
    description:
      'Use the <code>ICON_NAMES</code> const to access the list of available icons (exportable from <code>@/atoms</code>)',
  },
  showBox: {
    description:
      "Show the box around the icon to check if it's without padding (For development purpose)",
  },
  scale: {
    description:
      'Give the icon a cusotm size (Implemented with transform/scale css preperty)',
  },
};

export const ShowCase: StoryObj<ExtendedIconProps> = {
  render: (args) => (
    <PageWrapper centerContent>
      <Row gap="lg" wrap>
        {Object.values(ICON_NAMES).map((iconName) => (
          <Col align="center">
            <StyledGuidLines $hide={!args.showBox}>
              <Icon key={iconName} name={iconName} scale={args.scale} />
            </StyledGuidLines>
            <Typography>{iconName}</Typography>
          </Col>
        ))}
      </Row>
    </PageWrapper>
  ),
};

ShowCase.args = {
  name: ICON_NAMES.share,
  scale: 1,
  showBox: false,
};
ShowCase.argTypes = {
  name: {
    control: false,
  },
  showBox: {
    description:
      "Show the box around the icon to check if it's without padding",
  },
};

/* --- Styles --- */
const StyledGuidLines = styled.div<{ readonly $hide: boolean }>`
  border: 1px solid
    ${(props) =>
      props.$hide ? 'transparent' : props.theme.palette.warning.main};
`;
