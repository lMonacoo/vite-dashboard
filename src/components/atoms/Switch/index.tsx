import React from 'react';

import * as s from './styles';

interface SwitchProps {
  isChecked: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const Switch: React.FunctionComponent<SwitchProps> = ({ isChecked, onChange }) => {
  return (
    <s.SwitchContainer>
      <input id='switch-input' type='checkbox' checked={isChecked} onChange={onChange} />
      <label htmlFor='switch-input'>
        <span />
      </label>
    </s.SwitchContainer>
  );
};
