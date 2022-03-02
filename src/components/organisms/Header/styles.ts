import styled from 'styled-components';

export const HeaderComponent = styled.header`
  position: relative;
  width: 100%;
  margin-bottom: 2.8rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const Divisor = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  display: none;
  background: hsl(230, 22%, 74%);
  margin: 1rem 0 1rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`;
