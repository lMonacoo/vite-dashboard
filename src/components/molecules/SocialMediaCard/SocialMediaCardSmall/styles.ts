import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 1.5rem 1.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.75rem;

  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.dashboard.cardBg};

  &:hover {
    filter: ${(props) => `brightness(${props.theme.colors.dashboard.cardHoverBrightness})`};
  }
`;

export const SubTitleRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ValueRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
