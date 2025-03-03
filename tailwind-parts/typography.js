const tokensTypography = require("../tokens/typography-semantic.json");

const { mobile } = tokensTypography;

const fontSize = {
  headingH1: [
    `${mobile.headingH1FontSize}px`,
    {
      lineHeight: `${mobile.headingH1LineHeight}`,
      fontWeight: mobile.headingH1FontWeight,
      letterSpacing: mobile.headingH1LetterSpacing,
    },
  ],
  headingH2: [
    `${mobile.headingH2FontSize}px`,
    {
      lineHeight: `${mobile.headingH2LineHeight}`,
      fontWeight: mobile.headingH2FontWeight,
      letterSpacing: mobile.headingH2LetterSpacing,
    },
  ],
  headingH3: [
    `${mobile.headingH3FontSize}px`,
    {
      lineHeight: `${mobile.headingH3LineHeight}`,
      fontWeight: mobile.headingH3FontWeight,
      letterSpacing: mobile.headingH2LetterSpacing,
    },
  ],
  headingH4: [
    `${mobile.headingH4FontSize}px`,
    {
      lineHeight: `${mobile.headingH4LineHeight}`,
      fontWeight: mobile.headingH4FontWeight,
      letterSpacing: mobile.headingH2LetterSpacing,
    },
  ],
  lead: [
    `${mobile.leadFontSize}px`,
    {
      lineHeight: `${mobile.leadLineHeight}`,
      fontWeight: mobile.leadFontWeight,
      letterSpacing: mobile.leadLetterSpacing,
    },
  ],
  large: [
    `${mobile.largeFontSize}px`,
    {
      lineHeight: `${mobile.largeLineHeight}`,
      fontWeight: mobile.largeFontWeight,
      letterSpacing: mobile.largeLetterSpacing,
    },
  ],
  p: [
    `${mobile.pFontSize}px`,
    {
      lineHeight: `${mobile.pLineHeight}`,
      fontWeight: mobile.pFontWeight,
      letterSpacing: mobile.pLetterSpacing,
    },
  ],
  bodyBook: [
    `${mobile.bodyBookFontSize}px`,
    {
      lineHeight: `${mobile.bodyBookLineHeight}`,
      fontWeight: mobile.bodyBookFontWeight,
      letterSpacing: mobile.bodyBookLetterSpacing,
    },
  ],
  bodyMedium: [
    `${mobile.bodyMediumFontSize}px`,
    {
      lineHeight: `${mobile.bodyMediumLineHeight}`,
      fontWeight: mobile.bodyMediumFontWeight,
      letterSpacing: mobile.bodyMediumLetterSpacing,
    },
  ],
  bodyRegular: [
    `${mobile.bodyRegularFontSize}px`,
    {
      lineHeight: `${mobile.bodyRegularLineHeight}`,
      fontWeight: mobile.bodyRegularFontWeight,
      letterSpacing: mobile.bodyRegularLetterSpacing,
    },
  ],
  bodyLight: [
    `${mobile.bodyLightFontSize}px`,
    {
      lineHeight: `${mobile.bodyLightLineHeight}`,
      fontWeight: mobile.bodyLightFontWeight,
      letterSpacing: mobile.bodyLightLetterSpacing,
    },
  ],
};

module.exports = fontSize;
