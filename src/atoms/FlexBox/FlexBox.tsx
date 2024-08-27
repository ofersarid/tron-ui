import styled from 'styled-components';

enum Gap {
  xs = '0.5rem',
  sm = '1rem',
  md = '1.5rem',
  lg = '2rem',
  xl = '2.5rem',
}

export interface FlexProps {
  readonly children: React.ReactNode;
  readonly align?: 'center' | 'flex-start' | 'flex-end';
  readonly justify?: 'center' | 'flex-start' | 'flex-end';
  readonly className?: string;
  readonly gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readonly streatch?: boolean;
}

export function Row({
  children,
  align = 'center',
  justify = 'flex-start',
  className = '',
  gap = 'sm',
  streatch = false,
}: FlexProps): JSX.Element {
  return (
    <SBox
      className={className}
      $direction="row"
      $align={align}
      $justify={justify}
      $gap={Gap[gap]}
      $flex={streatch ? 1 : 0}
      $width={streatch ? '100%' : 'auto'}
    >
      {children}
    </SBox>
  );
}

export function Col({
  children,
  align = 'center',
  justify = 'flex-start',
  className = '',
  gap = 'sm',
  streatch = false,
}: FlexProps): JSX.Element {
  return (
    <SBox
      className={className}
      $direction="column"
      $align={align}
      $justify={justify}
      $gap={Gap[gap]}
      $flex={streatch ? 1 : 0}
      $width={streatch ? '100%' : 'auto'}
    >
      {children}
    </SBox>
  );
}

/* --- Styled Components --- */
const SBox = styled.div<{
  readonly $direction: 'row' | 'column';
  readonly $align: FlexProps['align'];
  readonly $justify: FlexProps['justify'];
  readonly $gap: Gap;
  readonly $flex: number;
  readonly $width: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 1rem;
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  flex: ${({ $flex }) => $flex};
  width: ${({ $width }) => $width};
`;
