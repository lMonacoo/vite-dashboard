import React from 'react';

import { BigCardContainer, Header } from '~/components/organisms';
import { bigCardsMock } from '~/mock/dashboard';

import * as s from './styles';

export const Dashboard: React.FunctionComponent = () => {
  const calculateTotalFollowers = () => {
    const totalNumber = bigCardsMock.reduce((acc, card) => {
      return acc + card.actualSubscribers;
    }, 0);

    return new Intl.NumberFormat().format(totalNumber);
  };

  return (
    <s.Container>
      <s.ContentContainer>
        <Header totalFollowers={calculateTotalFollowers()} />
        <BigCardContainer data={bigCardsMock} />
      </s.ContentContainer>
    </s.Container>
  );
};
