import React from 'react';

import { Dashboard } from '~/components/templates/Dashboard';
import { bigCardsMock, smallCardsMock } from '~/mock/dashboard';

export const MakeDashboardFactory: React.FunctionComponent = () => {
  // local where we parse the data to send to template
  return <Dashboard summary={bigCardsMock} dailyOverview={smallCardsMock} />;
};
