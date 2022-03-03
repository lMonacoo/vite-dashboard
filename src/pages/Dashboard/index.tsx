import React from 'react';

import { TemplateDashboard } from '~/components/templates/Dashboard';
import { bigCardsMock, smallCardsMock } from '~/mock/dashboard';

export const Dashboard: React.FunctionComponent = () => {
  // local where we parse the data to send to template
  return <TemplateDashboard summary={bigCardsMock} dailyOverview={smallCardsMock} />;
};
