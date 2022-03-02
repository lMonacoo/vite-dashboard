import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.dashboard.bg};
`;

export const ContentContainer = styled.main`
  position: relative;
  width: 90%;
  max-width: ${(props) => props.theme.breakpoints.desktop}px;
`;
