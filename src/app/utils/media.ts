export const breakpoints = {
  mobileSmall: 375,
  mobile: 576,
  tablet: 768,
  tabletLarge: 992,
  desktop: 1200,
  desktopWide: 1440,
  desktopUltraWide: 1920,
};

const customMediaQuery = (minWidth: number) =>
  `@media only screen and (min-width: ${(minWidth + 1) / 16}em)`;

export const media = {
  custom: customMediaQuery,
  mobileSmall: customMediaQuery(breakpoints.mobileSmall),
  mobile: customMediaQuery(breakpoints.mobile),
  tablet: customMediaQuery(breakpoints.tablet),
  tabletLarge: customMediaQuery(breakpoints.tabletLarge),
  desktop: customMediaQuery(breakpoints.desktop),
  desktopWide: customMediaQuery(breakpoints.desktopWide),
  desktopUltraWide: customMediaQuery(breakpoints.desktopUltraWide),
};
