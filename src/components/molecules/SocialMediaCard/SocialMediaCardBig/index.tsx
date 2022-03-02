import React from 'react';

import { Icons } from '~/assets';
import { Subtitle, Title } from '~/components/atoms';
import { MediasKeys } from '~/components/molecules/SocialMediaCard';

import * as s from './styles';

interface SocialMediaCardBigProps {
  formattedMainNumber: string;
  subTitle: string;
  statusNumber: number;
  status: 'positive' | 'negative';
  type: MediasKeys;
  description: string;
  borderColor: string;
}

export const SocialMediaCardBig: React.FunctionComponent<SocialMediaCardBigProps> = ({
  formattedMainNumber,
  subTitle,
  statusNumber,
  status,
  type,
  description,
  borderColor,
}) => {
  return (
    <s.Container>
      <s.ContainerBorderTop borderColor={borderColor} />

      <s.IconContainer>
        <img src={Icons[type]} alt='social media icon' />
        <Subtitle fontSize='subtitle' fontWeight='bold' color='text'>
          {subTitle}
        </Subtitle>
      </s.IconContainer>

      <s.CardBigValue>
        <Title fontSize='bigNumber'>{formattedMainNumber}</Title>
        <s.ValueSubtitle>{description}</s.ValueSubtitle>
      </s.CardBigValue>

      <s.StatusContainer>
        <img src={Icons[status]} alt='social media icon' />
        <Subtitle
          fontSize='subtitle'
          fontWeight='bold'
          color={status === 'positive' ? 'positiveNumbers' : 'negativeNumbers'}>
          {`${statusNumber} Today`}
        </Subtitle>
      </s.StatusContainer>
    </s.Container>
  );
};
