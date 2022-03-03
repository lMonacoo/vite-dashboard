import React from 'react';

import { Subtitle, Title } from '~/components/atoms';

import * as s from './styles';

interface PagesTitleProps {
  title: string;
  subtitle: string;
}

export const PagesTitle: React.FunctionComponent<PagesTitleProps> = ({ title, subtitle }) => {
  return (
    <s.TitleContainer>
      <Title fontSize='h1'>{title}</Title>
      <Subtitle color='text' fontSize='subtitle' fontWeight='bold'>
        {subtitle}
      </Subtitle>
    </s.TitleContainer>
  );
};
