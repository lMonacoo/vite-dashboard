import React from 'react';

import { BigCardContainer, Header, SmallCardContainer } from '~/components/organisms';
import { IbigCardsMock, IsmallCardsMock } from '~/mock/dashboard';

import * as s from './styles';

interface DashboardProps {
  summary: IbigCardsMock[];
  dailyOverview: IsmallCardsMock[];
}

export const Dashboard: React.FunctionComponent<DashboardProps> = ({ summary, dailyOverview }) => {
  //
  const calculateTotalFollowers = () => {
    const totalNumber = summary.reduce((acc, card) => {
      return acc + card.actualSubscribers;
    }, 0);

    return new Intl.NumberFormat().format(totalNumber);
  };

  return (
    <s.Container>
      <s.BackgroundShape />
      <s.ContentContainer>
        <Header totalFollowers={calculateTotalFollowers()} />
        <BigCardContainer data={summary} />
        <SmallCardContainer data={dailyOverview} />
      </s.ContentContainer>
    </s.Container>
  );
};
