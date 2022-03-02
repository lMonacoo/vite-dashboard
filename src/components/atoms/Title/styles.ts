import styled from 'styled-components';

import { TitleStylesProps } from '~/components/atoms/Title';

export const TitleText = styled.p<TitleStylesProps>`
  font-size: ${(props) => props.theme.fonts.size[props.fontSize]}rem;
  color: ${(props) => props.theme.colors.dashboard.title};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;
