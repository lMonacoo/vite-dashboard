import React from 'react';

import { PagesTitle, SwitchContainer } from '~/components/molecules';

import * as s from './styles';

interface HeaderProps {
  totalFollowers: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ totalFollowers }) => {
  return (
    <s.HeaderComponent>
      <PagesTitle title='Social Media Dashboard' subtitle={`Total Followers: ${totalFollowers}`} />
      <s.Divisor />
      <SwitchContainer />
    </s.HeaderComponent>
  );
};
