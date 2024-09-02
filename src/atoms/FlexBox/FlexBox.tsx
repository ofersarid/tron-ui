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
  readonly justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  readonly className?: string;
  readonly gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readonly streatch?: boolean;
  readonly wrap?: boolean;
}

export function Row({
  children,
  align = 'center',
  justify = 'flex-start',
  className = '',
  gap = 'sm',
  streatch = false,
  wrap = false,
}: FlexProps): JSX.Element {
  return (
    <StyledBox
      className={className}
      $direction="row"
      $align={align}
      $justify={justify}
      $gap={Gap[gap]}
      $flex={streatch ? 1 : 0}
      $width={streatch ? '100%' : 'auto'}
      $wrap={wrap ? 'wrap' : 'nowrap'}
    >
      {children}
    </StyledBox>
  );
}

export function Col({
  children,
  align = 'flex-start',
  justify = 'flex-start',
  className = '',
  gap = 'sm',
  streatch = false,
  wrap = false,
}: FlexProps): JSX.Element {
  return (
    <StyledBox
      className={className}
      $direction="column"
      $align={align}
      $justify={justify}
      $gap={Gap[gap]}
      $flex={streatch ? 1 : 0}
      $width={streatch ? '100%' : 'auto'}
      $wrap={wrap ? 'wrap' : 'nowrap'}
    >
      {children}
    </StyledBox>
  );
}

/* --- Styled Components --- */
const StyledBox = styled.div<{
  readonly $direction: 'row' | 'column';
  readonly $align: FlexProps['align'];
  readonly $justify: FlexProps['justify'];
  readonly $gap: Gap;
  readonly $flex: number;
  readonly $width: string;
  readonly $wrap: 'wrap' | 'nowrap';
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  flex: ${({ $flex }) => $flex};
  width: ${({ $width }) => $width};
  flex-wrap: ${({ $wrap }) => $wrap};
`;
