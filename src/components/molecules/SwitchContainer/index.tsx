import React from 'react';

import { Subtitle, Switch } from '~/components/atoms';
import { useTheme } from '~/styles/ThemeContext';

import * as s from './styles';

export const SwitchContainer: React.FunctionComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <s.SwitchContainer>
      <Subtitle color='text' fontWeight='bold' fontSize='subtitle'>
        {`${theme} Mode`}
      </Subtitle>
      <Switch isChecked={theme === 'Light'} onChange={toggleTheme} />
    </s.SwitchContainer>
  );
};
