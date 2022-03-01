import React from 'react';

import { CustomThemeProvider } from '~/styles/ThemeContext';

function App() {
  return (
    <CustomThemeProvider>
      <p>🪂 Vite Docs</p>
    </CustomThemeProvider>
  );
}

export default App;
