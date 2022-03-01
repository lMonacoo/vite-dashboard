import React from 'react';

import { Dashboard } from '~/pages/Dashboard';
import { CustomThemeProvider } from '~/styles/ThemeContext';

function App() {
  return (
    <CustomThemeProvider>
      <Dashboard />
    </CustomThemeProvider>
  );
}

export default App;
