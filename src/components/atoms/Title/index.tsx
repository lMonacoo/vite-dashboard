import React from 'react';

import * as s from './styles';

export interface TitleStylesProps {
  fontSize: 'h1' | 'h2' | 'bigNumber' | 'smallNumber';
}

interface TitleProps extends TitleStylesProps {
  children: React.ReactNode;
}

export const Title: React.FunctionComponent<TitleProps> = ({ children, fontSize }) => {
  return <s.TitleText fontSize={fontSize}>{children}</s.TitleText>;
};
