import { Col } from '@/atoms';
import styled from 'styled-components';

export interface PageWrapperProps {
  readonly children: React.ReactNode;
  readonly centerContent?: boolean;
}

export function PageWrapper({
  children,
  centerContent = false,
}: PageWrapperProps): JSX.Element {
  return (
    <StyledPageWrapper
      streatch
      children={children}
      justify={centerContent ? 'center' : 'flex-start'}
    />
  );
}

const StyledPageWrapper = styled(Col)`
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  width: 100%;
`;
