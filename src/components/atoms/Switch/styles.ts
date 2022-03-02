import styled from 'styled-components';

export const SwitchContainer = styled.div`
  font-size: 0;

  input {
    height: 0;
    width: 0;

    opacity: 0;
    visibility: hidden;
  }

  label {
    position: relative;
    width: 50px;
    height: 26px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    background: ${(props) => props.theme.colors.dashboard.BgToggle};
    border-radius: 100px;
    transition: background-color 0.2s;
  }

  span {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;

    border-radius: 20px;
    background: ${(props) => props.theme.colors.dashboard.bgTop};
    transition: 0.2s;
  }

  label:active span {
    width: 25px;
  }

  input:checked + label span {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;
