import React, { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { getImageBrightness } from './utils';

interface ImageWithDarkDetectionProps {
  readonly src: string;
  readonly alt?: string;
  readonly style?: React.CSSProperties;
  readonly onError?: () => void;
  readonly isDarkMode?: boolean;
  readonly darkModePadding?: string;
  readonly darkModeContrast?: string;
}

export const ImageWithDarkDetection: React.FC<ImageWithDarkDetectionProps> = ({
  src,
  alt,
  onError,
  style,
  isDarkMode = false,
  darkModePadding = '0.5rem',
  darkModeContrast = '#FFFFFF',
}: ImageWithDarkDetectionProps) => {
  const [isDarkModality, setIsDarkModality] = useState(false);

  useLayoutEffect(() => {
    if (isDarkMode) {
      getImageBrightness(src, (brightness: number) => {
        const darkThreshold = 16;
        setIsDarkModality(brightness < darkThreshold);
      });
    } else {
      setIsDarkModality(false);
    }
  }, [src, isDarkMode]);

  return (
    <SImage
      $isDarkModeImage={isDarkModality}
      src={src}
      alt={alt}
      onError={onError}
      $padding={darkModePadding}
      $darkModeContrast={darkModeContrast}
      style={style}
    />
  );
};

const SImage = styled.img<{
  readonly $isDarkModeImage?: boolean;
  readonly $padding: string;
  readonly $darkModeContrast: string;
}>`
  background-color: ${({ $isDarkModeImage, $darkModeContrast }) =>
    $isDarkModeImage ? $darkModeContrast : 'transparent'};
  padding: ${({ $isDarkModeImage, $padding }) =>
    $isDarkModeImage ? $padding : 'unset'};
  border-radius: ${({ $isDarkModeImage }) =>
    $isDarkModeImage ? '2px' : 'unset'};
  width: inherit;
  height: inherit;
`;
