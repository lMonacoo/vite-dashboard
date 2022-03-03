export type MediasKeys = 'facebook' | 'twitter' | 'instagram' | 'youtube';

export interface IbigCardsMock {
  socialMedia: MediasKeys;
  profile: string;
  actualSubscribers: number;
  update: number;
  status: 'positive' | 'negative';
}

export const bigCardsMock: IbigCardsMock[] = [
  {
    socialMedia: 'facebook',
    profile: '@nathanf',
    actualSubscribers: 1987,
    update: 12,
    status: 'positive',
  },
  {
    socialMedia: 'twitter',
    profile: '@nathanf',
    actualSubscribers: 1044,
    update: 99,
    status: 'positive',
  },
  {
    socialMedia: 'instagram',
    profile: '@realnathanf',
    actualSubscribers: 11000,
    update: 1099,
    status: 'positive',
  },
  {
    socialMedia: 'youtube',
    profile: 'Nathan F.',
    actualSubscribers: 8239,
    update: 144,
    status: 'negative',
  },
];

export interface IsmallCardsMock {
  socialMedia: MediasKeys;
  subTitle: string;
  value: number;
  update: number;
  status: 'positive' | 'negative';
}

export const smallCardsMock: IsmallCardsMock[] = [
  {
    socialMedia: 'facebook',
    subTitle: 'Page Views',
    value: 87,
    update: 3,
    status: 'positive',
  },
  {
    socialMedia: 'facebook',
    subTitle: 'Likes',
    value: 52,
    update: 2,
    status: 'negative',
  },
  {
    socialMedia: 'instagram',
    subTitle: 'Likes',
    value: 5462,
    update: 2257,
    status: 'positive',
  },
  {
    socialMedia: 'instagram',
    subTitle: 'Profile Views',
    value: 52000,
    update: 1375,
    status: 'positive',
  },
  {
    socialMedia: 'twitter',
    subTitle: 'Retweets',
    value: 117,
    update: 303,
    status: 'positive',
  },
  {
    socialMedia: 'twitter',
    subTitle: 'Likes',
    value: 507,
    update: 553,
    status: 'positive',
  },
  {
    socialMedia: 'youtube',
    subTitle: 'Likes',
    value: 107,
    update: 19,
    status: 'negative',
  },
  {
    socialMedia: 'youtube',
    subTitle: 'Total Views',
    value: 1407,
    update: 12,
    status: 'negative',
  },
];
