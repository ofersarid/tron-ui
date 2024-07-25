import styled from 'styled-components';

export interface BoxProps {
  readonly children: React.ReactNode;
  readonly direction: 'row' | 'col';
  readonly align: 'center' | 'flex-start' | 'flex-end';
}

export function FlexBox({
  children,
  direction = 'col',
  align = 'center',
}: BoxProps): JSX.Element {
  return (
    <SBox $direction={direction} $align={align}>
      {children}
    </SBox>
  );
}

/* --- Styled Components --- */
const SBox = styled.div<{
  readonly $direction: BoxProps['direction'];
  readonly $align: BoxProps['align'];
}>`
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'row' ? 'row' : 'column'};
  gap: 1rem;
  align-items: ${({ $align }) => $align};
`;
