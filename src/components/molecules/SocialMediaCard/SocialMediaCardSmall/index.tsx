import React from 'react';

import { Icons } from '~/assets';
import { Subtitle, Title } from '~/components/atoms';
import { SocialMediaCardSmallDTO } from '~/components/molecules/SocialMediaCard/CardsDTO';

import * as s from './styles';

export const SocialMediaCardSmall: React.FunctionComponent<SocialMediaCardSmallDTO> = ({
  formattedMainNumber,
  subTitle,
  statusNumber,
  status,
  type,
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
