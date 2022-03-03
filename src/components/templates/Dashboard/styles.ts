import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;

  background: ${(props) => props.theme.colors.dashboard.bg};
`;

export const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // ContentContainer = 4rem
  height: calc(4rem + 15rem);

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${(props) => props.theme.colors.dashboard.bgTop};
`;

export const ContentContainer = styled.main`
  position: relative;
  width: 90%;
  max-width: ${(props) => props.theme.breakpoints.desktop}px;

  margin: 0 auto;
  padding: 4rem 0;
`;
