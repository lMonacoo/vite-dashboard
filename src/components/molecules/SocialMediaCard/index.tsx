import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';

import { SocialMediaCardBig } from '~/components/molecules/SocialMediaCard/SocialMediaCardBig';
import { SocialMediaCardSmall } from '~/components/molecules/SocialMediaCard/SocialMediaCardSmall';

export type MediasKeys = 'facebook' | 'twitter' | 'instagram' | 'youtube';

interface SocialMediaCardProps {
  size: 'big' | 'small';
  socialMedia: MediasKeys;
  formattedMainNumber: string;
  subTitle: string;
  statusNumber: number;
  status: 'positive' | 'negative';
}

export const SocialMediaCardAdapter: React.FunctionComponent<SocialMediaCardProps> = ({
  size,
  socialMedia,
  formattedMainNumber,
  subTitle,
  statusNumber,
  status,
}) => {
  const theme = useTheme();

  const returnGenericsCardsProps = useCallback(() => {
    return {
      formattedMainNumber,
      subTitle,
      statusNumber,
      status,
      type: socialMedia,
    };
  }, []);

  const returnBigCardsProps = useCallback(() => {
    return {
      description: socialMedia === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS',
      borderColor: theme.colors.dashboard.brands[socialMedia],
    };
  }, []);

  const returnCardSize = {
    big: <SocialMediaCardBig {...returnGenericsCardsProps()} {...returnBigCardsProps()} />,
    small: <SocialMediaCardSmall {...returnGenericsCardsProps()} />,
  };

  return returnCardSize[size];
};
