import styled from 'styled-components';

import { SubtitleStylesProps } from '~/components/atoms/Subtitle';

export const SubtitleText = styled.p<SubtitleStylesProps>`
  font-size: ${(props) => props.theme.fonts.size[props.fontSize]}rem;
  color: ${(props) => props.theme.colors.dashboard[props.color]};
  font-weight: ${(props) => props.theme.fonts.weight[props.fontWeight]};
`;
