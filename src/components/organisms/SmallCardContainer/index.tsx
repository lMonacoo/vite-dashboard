import React from 'react';

import { Title } from '~/components/atoms';
import { SocialMediaCardAdapter } from '~/components/molecules';
import { IsmallCardsMock } from '~/mock/dashboard';

import * as s from './styles';

export const SmallCardContainer: React.FunctionComponent<{ data: IsmallCardsMock[] }> = ({
  data,
}) => {
  return (
    <s.OverviewCardsContainer>
      <Title fontSize='h2'>Overview - Today</Title>
      <s.CardContainer>
        {data.map((card: IsmallCardsMock, index: number) => {
          return (
            <SocialMediaCardAdapter
              key={card.update + index}
              size={'small'}
              socialMedia={card.socialMedia}
              formattedMainNumber={card.value >= 10000 ? `${card.value / 1000}k` : `${card.value}`}
              subTitle={card.subTitle}
              statusNumber={card.update}
              status={card.status}
            />
          );
        })}
      </s.CardContainer>
    </s.OverviewCardsContainer>
  );
};
