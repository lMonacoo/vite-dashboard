import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;

  background: ${(props) => props.theme.colors.dashboard.bg};
`;

export const ContentContainer = styled.main`
  position: relative;
  width: 90%;
  max-width: ${(props) => props.theme.breakpoints.desktop}px;

  margin: 0 auto;
  padding: 4rem 0;
`;
