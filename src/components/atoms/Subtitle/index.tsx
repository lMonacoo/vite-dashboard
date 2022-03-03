import React from 'react';

import * as s from './styles';

export interface SubtitleStylesProps {
  color: 'text' | 'title' | 'positiveNumbers' | 'negativeNumbers';
  fontSize: 'subtitle';
  fontWeight: 'light' | 'bold';
}

interface SubtitleProps extends SubtitleStylesProps {
  children: React.ReactNode;
}

export const Subtitle: React.FunctionComponent<SubtitleProps> = ({
  children,
  color,
  fontSize,
  fontWeight,
}) => {
  return (
    <s.SubtitleText fontWeight={fontWeight} color={color} fontSize={fontSize}>
      {children}
    </s.SubtitleText>
  );
};
