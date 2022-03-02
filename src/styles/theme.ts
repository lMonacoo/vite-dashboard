export type ThemeColorsType = typeof lightColors;
export type ThemeBreakpointsType = typeof breakpoints;
export type ThemeFontsType = typeof fonts;

const colors = {
  primary: {
    lineGreen: 'hsl(163, 72%, 41%)',
    brightRed: 'hsl(356, 69%, 56%)',
    darkBlue: 'hsl(208, 92%, 53%)',
    lightBlue: 'hsl(203, 89%, 53%)',
    instagramGradient: 'linear-gradient(50deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
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
    BgToggle: 'linear-gradient(70deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
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
      instagram: colors.primary.instagramGradient,
      youtube: colors.primary.darkRed,
    },
  },
};

const lightColors = {
  dashboard: {
    BgToggle: 'linear-gradient(70deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
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
      instagram: colors.primary.instagramGradient,
      youtube: colors.primary.darkRed,
    },
  },
};

const breakpoints = {
  mobile: 375,
  desktop: 1440,
  smallDesktop: 1220,
};

const fonts = {
  size: {
    subtitle: 0.9,
    h1: 1.75,
    bigNumber: 3.7,
  },
  weight: {
    light: 400,
    bold: 700,
  },
};

export type ComposeTheme = {
  breakpoints: ThemeBreakpointsType;
  fonts: ThemeFontsType;
  colors: ThemeColorsType;
};

export const darkTheme: ComposeTheme = {
  breakpoints,
  fonts,
  colors: darkColors,
};

export const lightTheme: ComposeTheme = {
  breakpoints,
  fonts,
  colors: lightColors,
};
