import React from 'react';

import { SocialMediaCardAdapter } from '~/components/molecules';
import { IbigCardsMock } from '~/mock/dashboard';

import * as s from './styles';

export const BigCardContainer: React.FunctionComponent<{ data: IbigCardsMock[] }> = ({ data }) => {
  return (
    <s.FollowersCardsContainer>
      {data.map((card: IbigCardsMock, index: number) => {
        return (
          <SocialMediaCardAdapter
            key={card.update + index}
            size={'big'}
            socialMedia={card.socialMedia}
            formattedMainNumber={
              card.actualSubscribers >= 10000
                ? `${card.actualSubscribers / 1000}k`
                : `${card.actualSubscribers}`
            }
            subTitle={card.profile}
            statusNumber={card.update}
            status={card.status}
          />
        );
      })}
    </s.FollowersCardsContainer>
  );
};
