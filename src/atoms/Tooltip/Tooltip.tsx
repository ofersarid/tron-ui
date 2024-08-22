import { Typography } from '@/atoms';
import MuiTooltip, {
  TooltipProps as MuiTooltipProps,
} from '@mui/material/Tooltip';

export interface TooltipProps {
  readonly placement?: MuiTooltipProps['placement'];
  readonly content?: React.ReactNode;
  readonly children: JSX.Element;
  readonly followCursor?: boolean;
  readonly type?: 'info' | 'error';
}

export const Tooltip = ({
  placement = 'bottom',
  content = '',
  children,
  followCursor = false,
  type = 'info',
}: TooltipProps): JSX.Element => {
  return (
    <MuiTooltip
      title={<Typography variant="caption">{content}</Typography>}
      placement={placement}
      arrow={!followCursor}
      followCursor={followCursor}
      PopperProps={{
        disablePortal: false,
      }}
    >
      <div>{children}</div>
    </MuiTooltip>
  );
};
