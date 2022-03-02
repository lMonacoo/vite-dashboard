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
  width: 80%;
  max-width: ${(props) => props.theme.breakpoints.desktop}px;
`;

export const FollowersCardsContainer = styled.div`
  position: relative;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.75rem;
`;
