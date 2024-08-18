import styled from 'styled-components';
import { Loader, DynamicTooltip } from '@/atoms';
import React from 'react';

export const SButton = styled.button<{
  $disabled?: boolean;
  $noPadding?: boolean;
}>`
  color: var(--text-link);
  border-radius: var(--border-radius-md);
  min-height: ${({ $noPadding }) => ($noPadding ? 'unset' : '32px')};
  padding: ${({ $noPadding }) =>
    $noPadding ? '0' : 'var(--space-xs) var(--space-md)'};
  font-family: 'Roboto Medium';
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  transition: var(--transition-time) ease-out;
  justify-content: center;
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
  filter: ${({ $disabled }) => ($disabled ? 'grayscale(1)' : 'none')};
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  white-space: nowrap;
  align-self: flex-start;
  &:hover {
    color: var(--text-link-hover);
  }
  &:active {
    pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'all')};
  }
`;

export const SIconButton = styled(SButton)<{
  $disabled?: boolean;
}>`
  min-height: unset;
  min-width: 1.3rem;
  padding-inline: 0.3rem;
  & svg {
    height: 100%;
  }
  &:hover {
    color: var(--text-link-hover);
  }
  &:disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const SPrimaryButton = styled(SButton)<{
  $flex?: number;
}>`
  border-color: var(--text-link);
  text-decoration: none;
  color: var(--bg-high-contrast);
  background-color: var(--text-link);
  border: 0.0625rem var(--text-link) solid; // we added this border to make the primary button the same with as the scondary button.
  flex: ${({ $flex }) => $flex || 0};
  &:hover {
    color: var(--bg-high-contrast);
    background-color: var(--text-link-hover);
    border-color: var(--text-link-hover);
  }
  &:disabled {
    opacity: 1;
    color: var(--bg-high-contrast);
    background-color: var(--text-disabled);
    border-color: var(--text-disabled);
    pointer-events: none;
  }
`;

export const SSecondaryButton = styled(SButton)<{
  $flex?: number;
}>`
  display: flex;
  color: var(--text-link);
  background: transparent;
  border: 0.0625rem var(--border-interactive-color) solid;
  box-sizing: border-box;
  flex: ${({ $flex }) => $flex || 0};
  &:hover {
    color: var(--text-link-hover);
    background: var(--bg-link);
    border: 0.0625rem solid var(--text-link-hover);
  }
  &:disabled {
    color: var(--text-disabled);
    background: var(--bg-medium-contrast);
    border: 0.0625rem solid var(--text-disabled);
    pointer-events: none;
  }
`;

export const Button = ({
  isLoading = false,
  disabled = false,
  text = '',
  icon,
  onClick,
  className = '',
  ariaLabel = '',
  variant = 'secondary',
  tip = '',
  tipWhenLoading = 'working...',
}: {
  readonly withLoader?: boolean;
  readonly isLoading?: boolean;
  readonly disabled?: boolean;
  readonly text?: string;
  readonly icon?: JSX.Element;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly tip?: React.ReactNode;
  readonly tipWhenLoading?: string;
  readonly variant?: 'primary' | 'secondary' | 'naked';
}): JSX.Element => {
  let variantComponent;
  switch (variant) {
    case 'naked':
      variantComponent = (
        <SButton
          $disabled={disabled}
          onClick={isLoading ? undefined : onClick}
          className={className}
          aria-label={ariaLabel}
        >
          <SOpacity $hide={isLoading}>{icon}</SOpacity>
          <SOpacity $hide={isLoading}>{text}</SOpacity>
          <SLoader $show={isLoading}>
            <Loader size="xs" color="decorative" />
          </SLoader>
        </SButton>
      );
      break;
    case 'primary':
      variantComponent = (
        <SPrimaryButton
          $disabled={disabled}
          onClick={isLoading ? undefined : onClick}
          className={className}
          aria-label={ariaLabel}
        >
          <SOpacity $hide={isLoading}>{icon}</SOpacity>
          <SOpacity $hide={isLoading}>{text}</SOpacity>
          <SLoader $show={isLoading}>
            <Loader size="xs" color="decorative" />
          </SLoader>
        </SPrimaryButton>
      );
      break;
    case 'secondary':
      variantComponent = (
        <SSecondaryButton
          $disabled={disabled}
          onClick={isLoading ? undefined : onClick}
          className={className}
          aria-label={ariaLabel}
        >
          <SOpacity $hide={isLoading}>{icon}</SOpacity>
          <SOpacity $hide={isLoading}>{text}</SOpacity>
          <SLoader $show={isLoading}>
            <Loader size="xs" color="decorative" />
          </SLoader>
        </SSecondaryButton>
      );
      break;
  }
  return (
    <DynamicTooltip content={isLoading ? tipWhenLoading : tip}>
      {variantComponent}
    </DynamicTooltip>
  );
};

const SLoader = styled.div<{ readonly $show: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: var(--transition-time) ease-out;
`;

const SOpacity = styled.div<{ readonly $hide: boolean }>`
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};
  transition: var(--transition-time) ease-out;
  line-height: 0;
`;

export const SButtonGroup = styled.div<{
  $vertical?: boolean;
  $streach?: boolean;
}>`
  gap: 0px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  border: 1px solid var(--decorative-default);
  background-color: var(--bg-high-contrast);
  height: ${({ $vertical, $streach }) =>
    $vertical ? ($streach ? '100%' : 'auto') : '2rem'};
  flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
  & > *:last-child {
    border-right: none;
    border-bottom: none;
  }
  & > button {
    height: ${({ $vertical, $streach }) =>
      $vertical ? ($streach ? '100%' : '36px') : '100%'};
    padding-inline: var(--space-md);
    width: ${({ $vertical, $streach }) =>
      $vertical || $streach ? '100%' : 'auto'};
    & > svg {
      width: ${({ $vertical }) => ($vertical ? '48px' : 'auto')};
    }
  }
`;

export const SButtonGroupItem = styled(SButton)<{
  $selected?: boolean;
}>`
  color: ${({ $selected }) =>
    $selected ? 'var(--bg-high-contrast)' : 'var(--decorative-default)'};
  border-radius: 0px;
  background-color: ${({ $selected }) =>
    $selected ? 'var(--text-link)' : 'transparent'};
  text-transform: capitalize;
  &:hover {
    color: ${({ $selected }) =>
      $selected ? 'var(--bg-high-contrast)' : 'var(--text-link-hover)'};
    background-color: ${({ $selected }) =>
      $selected ? 'var(--text-link)' : 'transparent'};
  }
  & > svg {
    height: 100%;
  }
`;

export const SButtonGroupSecondary = styled(SButtonGroup)`
  padding: 0.3rem;
  border-color: var(--border-static-color);
  transition: 0.2s linear;
  height: 2.5rem;
  &:hover {
    border-color: var(--border-interactive-color);
  }
`;

export const SButtonGroupItemSecondary = styled(SButtonGroupItem)<{
  $selected?: boolean;
  readonly $activePalette?: {
    readonly bg: string;
    readonly text: string;
  };
}>`
  font-size: var(--medium-font-size);
  min-height: unset;
  border-radius: var(--border-radius-sm);
  background-color: ${({ $selected, $activePalette }) =>
    $selected ? $activePalette?.bg || 'var(--text-link)' : 'transparent'};
  color: ${({ $selected, $activePalette }) =>
    $selected
      ? $activePalette?.text || 'var(--bg-high-contrast)'
      : 'var(--decorative-default)'};
  &:hover {
    background-color: ${({ $selected, $activePalette }) =>
      $selected ? $activePalette?.bg || 'var(--text-link)' : 'transparent'};
    color: ${({ $selected, $activePalette }) =>
      $selected
        ? $activePalette?.text || 'var(--bg-high-contrast)'
        : 'var(--decorative-default)'};
  }
`;

export const STextButton = styled(SButton)<{
  fontFamily: string;
  fontSize?: string;
}>`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  min-height: auto;
  background: transparent;
  color: var(--text-link);
  transition: all ease var(--transition-time);
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: inherit;
  line-height: inherit;
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  text-align: inherit;
  gap: var(--space-xs);
  svg {
    height: 100%;
  }
  &:hover {
    color: var(--text-link-hover);
    svg {
      fill: var(--text-link-hover);
    }
    svg {
      path {
        fill: var(--text-link-hover);
      }
    }
  }
  &:disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
    svg {
      fill: var(--text-disabled);
    }
    svg {
      path {
        fill: var(--text-disabled);
      }
    }
  }
`;
