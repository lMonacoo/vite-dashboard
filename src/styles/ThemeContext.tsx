import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '~/styles/global';
import { darkTheme, lightTheme } from '~/styles/theme';

const STORAGE_KEYWORD = '@Theme.settings';

export enum ThemeOptions {
  Dark = 'dark',
  Light = 'light',
}

export type ThemeContextType = {
  theme: ThemeOptions;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const CustomThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function CustomThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(ThemeOptions.Light);

  const setMode = (mode: ThemeOptions) => {
    window.localStorage.setItem(STORAGE_KEYWORD, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === ThemeOptions.Light) return setMode(ThemeOptions.Dark);
    if (theme === ThemeOptions.Dark) return setMode(ThemeOptions.Light);
    throw new Error('insert a valid theme option');
  };

  useEffect(() => {
    const StorageConfigs = window.localStorage.getItem(STORAGE_KEYWORD) as ThemeOptions;
    if (StorageConfigs) return setTheme(StorageConfigs);
    setMode(ThemeOptions.Light);
  }, []);

  // ----

  const returnSelectedTheme = (themeSelected: ThemeOptions) => {
    return themeSelected === ThemeOptions.Light ? lightTheme : darkTheme;
  };

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={returnSelectedTheme(theme)}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export const useTheme = () => useContext(CustomThemeContext);
