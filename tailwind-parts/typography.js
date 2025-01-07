const tokensTypography = require('../tokens/typography-semantic.json');

const { mobile } = tokensTypography;

module.exports = {
    fontFamily: {
        sans: ["'Suisse Int\\'l'", 'sans-serif'],
        serif: ["'Suisse Works'", 'serif'],
        mono: ['Courier New', 'monospace']
    },
    fontSize: {
        headingH1: [
            `${mobile.headingH1FontSize}px`, 
            { lineHeight: `${mobile.headingH1LineHeight}`, fontWeight: mobile.headingH1FontWeight }
          ],
          headingH2: [
            `${mobile.headingH2FontSize}px`, 
            { lineHeight: `${mobile.headingH2LineHeight}`, fontWeight: mobile.headingH2FontWeight }
          ],
          headingH3: [
            `${mobile.headingH3FontSize}px`, 
            { lineHeight: `${mobile.headingH3LineHeight}`, fontWeight: mobile.headingH3FontWeight }
          ],
          headingH4: [
            `${mobile.headingH4FontSize}px`, 
            { lineHeight: `${mobile.headingH4LineHeight}`, fontWeight: mobile.headingH4FontWeight }
          ],
          lead: [
            `${mobile.leadFontSize}px`, 
            { lineHeight: `${mobile.leadLineHeight}`, fontWeight: mobile.leadFontWeight }
          ],
          large: [
            `${mobile.largeFontSize}px`, 
            { lineHeight: `${mobile.largeLineHeight}`, fontWeight: mobile.largeFontWeight }
          ],
          p: [
            `${mobile.pFontSize}px`, 
            { lineHeight: `${mobile.pLineHeight}`, fontWeight: mobile.pFontWeight }
          ],
          bodyBook: [
            `${mobile.bodyBookFontSize}px`, 
            { lineHeight: `${mobile.bodyBookLineHeight}`, fontWeight: mobile.bodyBookFontWeight }
          ],
          bodyMedium: [
            `${mobile.bodyMediumFontSize}px`, 
            { lineHeight: `${mobile.bodyMediumLineHeight}`, fontWeight: mobile.bodyMediumFontWeight }
          ],
          bodyRegular: [
            `${mobile.bodyRegularFontSize}px`, 
            { lineHeight: `${mobile.bodyRegularLineHeight}`, fontWeight: mobile.bodyRegularFontWeight }
          ],
          bodyLight: [
            `${mobile.bodyLightFontSize}px`, 
            { lineHeight: `${mobile.bodyLightLineHeight}`, fontWeight: mobile.bodyLightFontWeight }
          ],
    }

}