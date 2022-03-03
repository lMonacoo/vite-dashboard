import React from 'react';

import { Icons } from '~/assets';
import { Subtitle, Title } from '~/components/atoms';
import { MediasKeys } from '~/components/molecules/SocialMediaCard';

import * as s from './styles';

interface SocialMediaCardSmallProps {
  formattedMainNumber: string;
  subTitle: string;
  type: MediasKeys;
  statusNumber: number;
  status: 'positive' | 'negative';
}

export const SocialMediaCardSmall: React.FunctionComponent<SocialMediaCardSmallProps> = ({
  formattedMainNumber,
  subTitle,
  type,
  statusNumber,
  status,
}) => {
  return (
    <s.Container>
      <s.SubTitleRow>
        <Subtitle fontSize='subtitle' fontWeight='bold' color='text'>
          {subTitle}
        </Subtitle>
        <img src={Icons[type]} alt='social media icon' />
      </s.SubTitleRow>

      <s.ValueRow>
        <Title fontSize='smallNumber'>{formattedMainNumber}</Title>
        <s.StatusContainer>
          <img src={Icons[status]} alt='social media icon' />
          <Subtitle
            fontSize='subtitle'
            fontWeight='bold'
            color={status === 'positive' ? 'positiveNumbers' : 'negativeNumbers'}>
            {`${statusNumber}%`}
          </Subtitle>
        </s.StatusContainer>
      </s.ValueRow>
    </s.Container>
  );
};
