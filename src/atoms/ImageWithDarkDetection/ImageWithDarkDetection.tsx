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
  readonly boostMidRange?: boolean;
}

export const ImageWithDarkDetection: React.FC<ImageWithDarkDetectionProps> = ({
  src,
  alt,
  onError,
  style,
  isDarkMode = false,
  darkModePadding = '0.5rem',
  boostMidRange = true,
  darkModeContrast = '#FFFFFF',
}: ImageWithDarkDetectionProps) => {
  const [filter, setFilter] = useState('none');
  const [isDarkModality, setIsDarkModality] = useState(false);

  useLayoutEffect(() => {
    if (isDarkMode) {
      getImageBrightness(src, (brightness: number) => {
        const darkThreshold = 16;
        const invertThreshold = 128;

        if (brightness < darkThreshold) {
          setIsDarkModality(true);
        } else if (brightness < invertThreshold && boostMidRange) {
          setFilter('contrast(1.3) brightness(1.3)');
          setIsDarkModality(false);
        } else {
          setFilter('none');
        }
      });
    } else {
      setIsDarkModality(false);
    }
  }, [src, isDarkMode, boostMidRange]);

  return (
    <SImage
      $isDarkModeImage={isDarkModality}
      src={src}
      alt={alt}
      onError={onError}
      $padding={darkModePadding}
      $darkModeContrast={darkModeContrast}
      style={{
        filter: filter,
        width: 'inherit',
        height: 'inherit',
        ...style,
      }}
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
`;
