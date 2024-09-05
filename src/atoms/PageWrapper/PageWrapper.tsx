import { Col } from '@/atoms';
import styled from 'styled-components';

export interface PageWrapperProps {
  readonly children: React.ReactNode;
  readonly centerContent?: boolean;
}

/**
 * PageWrapper is supposed to be the main container for the page. <br/>
 * It should be used to wrap the main content of the page. <br/>
 * It will provide padding and background color to the content. <br/>
 */
export function PageWrapper({
  children,
  centerContent = false,
}: PageWrapperProps): JSX.Element {
  return (
    <StyledPageWrapper
      flex={1}
      children={children}
      justify={centerContent ? 'center' : 'flex-start'}
      align={centerContent ? 'center' : 'flex-start'}
    />
  );
}

const StyledPageWrapper = styled(Col)`
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  width: 100%;
`;
