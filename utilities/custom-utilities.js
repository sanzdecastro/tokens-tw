const tokensTypography = require("../tokens/typography-semantic.json");

module.exports = (addUtilities) => {
  const { mobile, tablet, desktopDefault, bigDesktop } = tokensTypography;
  const utilities = {
    "" : {
      ".text-headingH1": {
        "margin-bottom": `${mobile.headingH1ParagraphSpacing}px`,
        "text-indent": `${mobile.headingH1Indent}px`,
      },
      ".text-headingH2": {
        "margin-bottom": `${mobile.headingH2ParagraphSpacing}px`,
        "text-indent": `${mobile.headingH2Indent}px`,
      },
      ".text-headingH3": {
        "margin-bottom": `${mobile.headingH3ParagraphSpacing}px`,
        "text-indent": `${mobile.headingH3Indent}px`,
      },
      ".text-headingH4": {
        "margin-bottom": `${mobile.headingH4ParagraphSpacing}px`,
        "text-indent": `${mobile.headingH4Indent}px`,
      },
      ".text-lead": {
        "margin-bottom": `${mobile.leadParagraphSpacing}px`,
        "text-indent": `${mobile.leadIndent}px`,
      },
      ".text-large": {
        "margin-bottom": `${mobile.largeParagraphSpacing}px`,
        "text-indent": `${mobile.largeIndent}px`,
      },
      ".text-p": {
        "margin-bottom": `${mobile.pParagraphSpacing}px`,
        "text-indent": `${mobile.pIndent}px`,
      },
      ".text-bodyBook": {
        "margin-bottom": `${mobile.bodyBookParagraphSpacing}px`,
        "text-indent": `${mobile.bodyBookIndent}px`,
      },
      ".text-bodyMedium": {
        "margin-bottom": `${mobile.bodyMediumParagraphSpacing}px`,
        "text-indent": `${mobile.bodyMediumIndent}px`,
      },
      ".text-bodyRegular": {
        "margin-bottom": `${mobile.bodyRegularParagraphSpacing}px`,
        "text-indent": `${mobile.bodyRegularIndent}px`,
      },
      ".text-bodyLight": {
        "margin-bottom": `${mobile.bodyLightParagraphSpacing}px`,
        "text-indent": `${mobile.bodyLightIndent}px`,
      },
    },
    "@screen md": {
      ".text-headingH1": {
        "font-weight": tablet.headingH1FontWeight,
        "font-size": tablet.headingH1FontSize,
        "margin-bottom": `${tablet.headingH1ParagraphSpacing}px`,
        "text-indent": `${tablet.headingH1Indent}px`,
        "line-height": tablet.headingH1LineHeight,
        "letter-spacing": "var(--letter-spacing-tracking-normal)",
      },
      ".text-headingH2": {
        "font-weight": tablet.headingH2FontWeight,
        "font-size": tablet.headingH2FontSize,
        "margin-bottom": `${tablet.headingH2ParagraphSpacing}px`,
        "text-indent": `${tablet.headingH2Indent}px`,
        "line-height": tablet.headingH2LineHeight,
        "letter-spacing": "var(--letter-spacing-tracking-normal)",
      },
      ".text-headingH3": {
        "font-weight": tablet.headingH3FontWeight,
        "font-size": tablet.headingH3FontSize,
        "margin-bottom": `${tablet.headingH3ParagraphSpacing}px`,
        "text-indent": `${tablet.headingH3Indent}px`,
        "line-height": tablet.headingH3LineHeight,
        "letter-spacing": "var(--letter-spacing-tracking-normal)",
      },
      ".text-headingH4": {
        "font-weight": tablet.headingH4FontWeight,
        "font-size": tablet.headingH4FontSize,
        "margin-bottom": `${tablet.headingH4ParagraphSpacing}px`,
        "text-indent": `${tablet.headingH4Indent}px`,
        "line-height": tablet.headingH4LineHeight,
        "letter-spacing": "var(--letter-spacing-tracking-normal)",
      },
      ".text-lead": {
        "font-weight": tablet.leadFontWeight,
        "font-size": tablet.leadFontSize,
        "margin-bottom": `${tablet.leadParagraphSpacing}px`,
        "text-indent": `${tablet.leadIndent}px`,
        "line-height": tablet.leadLineHeight,
      },
      ".text-large": {
        "font-weight": tablet.largeFontWeight,
        "font-size": tablet.largeFontSize,
        "margin-bottom": `${tablet.largeParagraphSpacing}px`,
        "text-indent": `${tablet.largeIndent}px`,
        "line-height": tablet.largeLineHeight,
      },
      ".text-p": {
        "font-weight": tablet.pFontWeight,
        "font-size": tablet.pFontSize,
        "margin-bottom": `${tablet.pParagraphSpacing}px`,
        "text-indent": `${tablet.pIndent}px`,
        "line-height": tablet.pLineHeight,
      },
      ".text-bodyBook": {
        "font-weight": tablet.bodyBookFontWeight,
        "font-size": tablet.bodyBookFontSize,
        "margin-bottom": `${tablet.bodyBookParagraphSpacing}px`,
        "text-indent": `${tablet.bodyBookIndent}px`,
        "line-height": tablet.bodyLineHeight,
      },
      ".text-bodyMedium": {
        "font-weight": tablet.bodyMediumFontWeight,
        "font-size": tablet.bodyMediumFontSize,
        "margin-bottom": `${tablet.bodyMediumParagraphSpacing}px`,
        "text-indent": `${tablet.bodyMediumIndent}px`,
        "line-height": tablet.bodyMediumLineHeight,
      },
      ".text-bodyRegular": {
        "font-weight": tablet.bodyRegularFontWeight,
        "font-size": tablet.bodyRegularFontSize,
        "margin-bottom": `${tablet.bodyRegularParagraphSpacing}px`,
        "text-indent": `${tablet.bodyRegularIndent}px`,
        "line-height": tablet.bodyRegularLineHeight,
      },
      ".text-bodyLight": {
        "font-weight": tablet.bodyLightFontWeight,
        "font-size": tablet.bodyLightFontSize,
        "margin-bottom": `${tablet.bodyLightParagraphSpacing}px`,
        "text-indent": `${tablet.bodyLightIndent}px`,
        "line-height": tablet.bodyLightLineHeight,
      },
    },
    "@screen lg": {
      ".text-headingH1": {
        "font-weight": desktopDefault.headingH1FontWeight,
        "font-size": desktopDefault.headingH1FontSize,
        "margin-bottom": `${desktopDefault.headingH1ParagraphSpacing}px`,
        "text-indent": `${desktopDefault.headingH1Indent}px`,
        "line-height": tablet.headingH1LineHeight,
      },
      ".text-headingH2": {
        "font-weight": desktopDefault.headingH2FontWeight,
        "font-size": desktopDefault.headingH2FontSize,
        "margin-bottom": `${desktopDefault.headingH2ParagraphSpacing}px`,
        "text-indent": `${desktopDefault.headingH2Indent}px`,
      },
      ".text-headingH3": {
        "font-weight": desktopDefault.headingH3FontWeight,
        "font-size": desktopDefault.headingH3FontSize,
        "margin-bottom": `${desktopDefault.headingH3ParagraphSpacing}px`,
        "text-indent": `${desktopDefault.headingH3Indent}px`,
      },
      ".text-headingH4": {
        "font-weight": desktopDefault.headingH4FontWeight,
        "font-size": desktopDefault.headingH4FontSize,
        "margin-bottom": `${desktopDefault.headingH4ParagraphSpacing}px`,
        "text-indent": `${desktopDefault.headingH4Indent}px`,
      },
      ".text-lead": {
        "font-weight": desktopDefault.leadFontWeight,
        "font-size": desktopDefault.leadFontSize,
        "margin-bottom": `${desktopDefault.leadParagraphSpacing}px`,
        "text-indent": `${desktopDefault.leadIndent}px`,
      },
      ".text-large": {
        "font-weight": desktopDefault.largeFontWeight,
        "font-size": desktopDefault.largeFontSize,
        "margin-bottom": `${desktopDefault.largeParagraphSpacing}px`,
        "text-indent": `${desktopDefault.largeIndent}px`,
      },
      ".text-paragraph": {
        "font-weight": desktopDefault.pFontWeight,
        "font-size": desktopDefault.pFontSize,
        "margin-bottom": `${desktopDefault.pParagraphSpacing}px`,
        "text-indent": `${desktopDefault.pIndent}px`,
      },
      ".text-bodyBook": {
        "font-weight": desktopDefault.bodyBookFontWeight,
        "font-size": desktopDefault.bodyBookFontSize,
        "margin-bottom": `${desktopDefault.bodyBookParagraphSpacing}px`,
        "text-indent": `${desktopDefault.bodyBookIndent}px`,
      },
      ".text-bodyMedium": {
        "font-weight": desktopDefault.bodyMediumFontWeight,
        "font-size": desktopDefault.bodyMediumFontSize,
        "margin-bottom": `${desktopDefault.bodyMediumParagraphSpacing}px`,
        "text-indent": `${desktopDefault.bodyMediumIndent}px`,
      },
      ".text-bodyRegular": {
        "font-weight": desktopDefault.bodyRegularFontWeight,
        "font-size": desktopDefault.bodyRegularFontSize,
        "margin-bottom": `${desktopDefault.bodyRegularParagraphSpacing}px`,
        "text-indent": `${desktopDefault.bodyRegularIndent}px`,
      },
      ".text-bodyLight": {
        "font-weight": desktopDefault.bodyLightFontWeight,
        "font-size": desktopDefault.bodyLightFontSize,
        "margin-bottom": `${desktopDefault.bodyLightParagraphSpacing}px`,
        "text-indent": `${desktopDefault.bodyLightIndent}px`,
      },
    },
    "@screen xl": {
      ".text-headingH1": {
        "font-weight": bigDesktop.headingH1FontWeight,
        "font-size": bigDesktop.headingH1FontSize,
        "margin-bottom": `${bigDesktop.headingH1ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.headingH1Indent}px`,
      },
      ".text-headingH2": {
        "font-weight": bigDesktop.headingH2FontWeight,
        "font-size": bigDesktop.headingH2FontSize,
        "margin-bottom": `${bigDesktop.headingH2ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.headingH2Indent}px`,
      },
      ".text-headingH3": {
        "font-weight": bigDesktop.headingH3FontWeight,
        "font-size": bigDesktop.headingH3FontSize,
        "margin-bottom": `${bigDesktop.headingH3ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.headingH3Indent}px`,
      },
      ".text-headingH4": {
        "font-weight": bigDesktop.headingH4FontWeight,
        "font-size": bigDesktop.headingH4FontSize,
        "margin-bottom": `${bigDesktop.headingH4ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.headingH4Indent}px`,
      },
      ".text-lead": {
        "font-weight": bigDesktop.leadFontWeight,
        "font-size": bigDesktop.leadFontSize,
        "margin-bottom": `${bigDesktop.leadParagraphSpacing}px`,
        "text-indent": `${bigDesktop.leadIndent}px`,
      },
      ".text-large": {
        "font-weight": bigDesktop.largeFontWeight,
        "font-size": bigDesktop.largeFontSize,
        "margin-bottom": `${bigDesktop.largeParagraphSpacing}px`,
        "text-indent": `${bigDesktop.largeIndent}px`,
      },
      ".text-paragraph": {
        "font-weight": bigDesktop.pFontWeight,
        "font-size": bigDesktop.pFontSize,
        "margin-bottom": `${bigDesktop.pParagraphSpacing}px`,
        "text-indent": `${bigDesktop.pIndent}px`,
      },
      ".text-bodyBook": {
        "font-weight": bigDesktop.bodyBookFontWeight,
        "font-size": bigDesktop.bodyBookFontSize,
        "margin-bottom": `${bigDesktop.bodyBookParagraphSpacing}px`,
        "text-indent": `${bigDesktop.bodyBookIndent}px`,
      },
      ".text-bodyMedium": {
        "font-weight": bigDesktop.bodyMediumFontWeight,
        "font-size": bigDesktop.bodyMediumFontSize,
        "margin-bottom": `${bigDesktop.bodyMediumParagraphSpacing}px`,
        "text-indent": `${bigDesktop.bodyMediumIndent}px`,
      },
      ".text-bodyRegular": {
        "font-weight": bigDesktop.bodyRegularFontWeight,
        "font-size": bigDesktop.bodyRegularFontSize,
        "margin-bottom": `${bigDesktop.bodyRegularParagraphSpacing}px`,
        "text-indent": `${bigDesktop.bodyRegularIndent}px`,
      },
      ".text-bodyLight": {
        "font-weight": bigDesktop.bodyLightFontWeight,
        "font-size": bigDesktop.bodyLightFontSize,
        "margin-bottom": `${bigDesktop.bodyLightParagraphSpacing}px`,
        "text-indent": `${bigDesktop.bodyLightIndent}px`,
      },
    },
  };
  addUtilities(utilities, { variants: ["responsive"] });
};
