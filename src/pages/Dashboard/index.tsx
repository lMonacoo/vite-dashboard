import React from 'react';

import { SocialMediaCardBig } from '~/components/molecules/SocialMediaCard/SocialMediaCardBig';
import { Header } from '~/components/organisms';

import * as s from './styles';

export const Dashboard: React.FunctionComponent = () => {
  return (
    <s.Container>
      <s.ContentContainer>
        <Header />

        <s.FollowersCardsContainer>
          <SocialMediaCardBig />
        </s.FollowersCardsContainer>
        {/*  */}
      </s.ContentContainer>
    </s.Container>
  );
};
