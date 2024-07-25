import {
  default as MuiTypography,
  TypographyProps,
} from '@mui/material/Typography';
import './styles.css';

export function Typography(props: TypographyProps): JSX.Element {
  return <MuiTypography {...props} />;
}
