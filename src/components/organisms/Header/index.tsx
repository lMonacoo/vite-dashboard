import React from 'react';

import { PagesTitle, SwitchContainer } from '~/components/molecules';

import * as s from './styles';

export const Header: React.FunctionComponent = () => {
  return (
    <s.HeaderComponent>
      <PagesTitle title='Social Media Dashboard' subtitle={`Total Followers: 23,004`} />
      <SwitchContainer />
    </s.HeaderComponent>
  );
};
