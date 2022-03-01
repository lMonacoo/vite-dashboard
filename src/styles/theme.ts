const breakpoints = {
  mobile: 375,
  desktop: 1440,
};

const fonts = {
  weight: {
    light: 400,
    bold: 700,
  },
};

const colors = {
  primary: {
    lineGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
    darkBlue: 'hsl(208, 92%, 53%)',
    lightBlue: 'hsl(203, 89%, 53%)',
    instagramGradient: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
    darkRed: 'hsl(348, 97%, 39%)',
    veryDarkBluePrimary: 'hsl(230, 17%, 14%)',
    veryDarkBlueSecondary: 'hsl(232, 19%, 15%)',
    darkUnsaturatedBlue: 'hsl(228, 28%, 20%)',
    unsaturatedBlue: 'hsl(228, 34%, 66%)',
    white: 'hsl(0, 0%, 100%)',
    veryPaleBlue: 'hsl(225, 100%, 98%)',
    lightGrayishBlue: 'hsl(227, 47%, 96%)',
    darkGrayishBlue: 'hsl(228, 12%, 44%)',
  },
};

const darkColors = {
  dashboard: {
    toggle: 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
    positiveNumbers: colors.primary.lineGreen,
    negativeNumbers: colors.primary.brightRed,
    bg: colors.primary.veryDarkBluePrimary,
    bgTop: colors.primary.veryDarkBlueSecondary,
    cardBg: colors.primary.darkUnsaturatedBlue,
    title: colors.primary.white,
    text: colors.primary.unsaturatedBlue,
    brands: {
      facebook: colors.primary.darkBlue,
      twitter: colors.primary.lightBlue,
      instagramGradient: colors.primary.instagramGradient,
      youtube: colors.primary.darkRed,
    },
  },
};

const lightColors = {
  toggle: 'hsl(230, 22%, 74%) to hsl(230, 22%, 74%)',
  positiveNumbers: colors.primary.lineGreen,
  negativeNumbers: colors.primary.brightRed,
  bg: colors.primary.white,
  bgTop: colors.primary.veryPaleBlue,
  cardBg: colors.primary.lightGrayishBlue,
  title: colors.primary.veryDarkBluePrimary,
  text: colors.primary.darkGrayishBlue,
  brands: {
    facebook: colors.primary.darkBlue,
    twitter: colors.primary.lightBlue,
    instagramGradient: colors.primary.instagramGradient,
    youtube: colors.primary.darkRed,
  },
};
