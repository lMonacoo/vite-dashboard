import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 2.2rem 0 1.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-radius: 5px;
  overflow: hidden;

  background: ${(props) => props.theme.colors.dashboard.cardBg};
`;

export const ContainerBorderTop = styled.div<{ borderColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 6px solid transparent;
  background: ${(props) => props.borderColor};
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CardBigValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ValueSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.dashboard.text};
  font-weight: ${(props) => props.theme.fonts.weight.light};
  letter-spacing: 0.3rem;
`;
