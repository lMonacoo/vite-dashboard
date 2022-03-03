import React from 'react';

import { MakeDashboardFactory } from '~/pages/DashboardFactory';
import { CustomThemeProvider } from '~/styles/ThemeContext';

function App() {
  return (
    <CustomThemeProvider>
      <MakeDashboardFactory />
    </CustomThemeProvider>
  );
}

export default App;
