import styled from 'styled-components';

export interface BoxProps {
  readonly children: React.ReactNode;
  readonly align?: 'center' | 'flex-start' | 'flex-end';
}

export function Row({ children, align = 'center' }: BoxProps): JSX.Element {
  return (
    <SBox $direction="row" $align={align}>
      {children}
    </SBox>
  );
}

export function Col({ children, align = 'center' }: BoxProps): JSX.Element {
  return (
    <SBox $direction="column" $align={align}>
      {children}
    </SBox>
  );
}

/* --- Styled Components --- */
const SBox = styled.div<{
  readonly $direction: 'row' | 'column';
  readonly $align: BoxProps['align'];
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 1rem;
  align-items: ${({ $align }) => $align};
`;
