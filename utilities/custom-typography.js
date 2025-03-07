const tokensTypography = require("../tokens/typography-semantic.json");

module.exports = function ({ addComponents, theme }) {
  const { mobile, tablet, desktop, bigDesktop } = tokensTypography;

  // Añadimos los screens definidos en el config para hacer referencia a ellos
  // En TW4 no podemos usar la directiva @md, @lg como en TW3
  // Definimos también los valores en mobile aquí (no creamos la clase utilitaria desde fontSize en config)
  const screens = theme("screens");

  const components = {
    ".text-heading-h1": {
      "font-weight": mobile.scTypographyHeadingH1FontWeight,
      "font-size": `${mobile.scTypographyHeadingH1FontSize}px`,
      "line-height": mobile.scTypographyHeadingH1LineHeight,
      "margin-bottom": `${mobile.scTypographyHeadingH1ParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyHeadingH1Indent}px`,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyHeadingH1FontWeight,
        "font-size": `${tablet.scTypographyHeadingH1FontSize}px`,
        "margin-bottom": `${tablet.scTypographyHeadingH1ParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyHeadingH1Indent}px`,
        "line-height": tablet.scTypographyHeadingH1LineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyHeadingH1FontWeight,
        "font-size": `${desktop.scTypographyHeadingH1FontSize}px`,
        "margin-bottom": `${desktop.scTypographyHeadingH1ParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyHeadingH1Indent}px`,
        "line-height": desktop.scTypographyHeadingH1LineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyHeadingH1FontWeight,
        "font-size": `${bigDesktop.scTypographyHeadingH1FontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyHeadingH1ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyHeadingH1Indent}px`,
        "line-height": bigDesktop.scTypographyHeadingH1LineHeight,
      },
    },
    ".text-heading-h2": {
      "font-size": `${mobile.scTypographyHeadingH2FontSize}px`,
      "font-weight": mobile.scTypographyHeadingH2FontWeight,
      "line-height": mobile.scTypographyHeadingH2LineHeight,
      "margin-bottom": `${mobile.scTypographyHeadingH2ParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyHeadingH2Indent}px`,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyHeadingH2FontWeight,
        "font-size": `${tablet.scTypographyHeadingH2FontSize}px`,
        "margin-bottom": `${tablet.scTypographyHeadingH2ParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyHeadingH2Indent}px`,
        "line-height": tablet.scTypographyHeadingH2LineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyHeadingH2FontWeight,
        "font-size": `${desktop.scTypographyHeadingH2FontSize}px`,
        "margin-bottom": `${desktop.scTypographyHeadingH2ParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyHeadingH2Indent}px`,
        "line-height": desktop.scTypographyHeadingH2LineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyHeadingH2FontWeight,
        "font-size": `${bigDesktop.scTypographyHeadingH2FontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyHeadingH2ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyHeadingH2Indent}px`,
        "line-height": bigDesktop.scTypographyHeadingH2LineHeight,
      },
    },
    ".text-heading-h3": {
      "font-weight": mobile.scTypographyHeadingH3FontWeight,
      "font-size": `${mobile.scTypographyHeadingH3FontSize}px`,
      "margin-bottom": `${mobile.headingH3ParagraphSpacing}px`,
      "text-indent": `${mobile.headingH3Indent}px`,
      "line-height": mobile.scTypographyHeadingH3LineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyHeadingH3FontWeight,
        "font-size": `${tablet.scTypographyHeadingH3FontSize}px`,
        "margin-bottom": `${tablet.headingH3ParagraphSpacing}px`,
        "text-indent": `${tablet.headingH3Indent}px`,
        "line-height": tablet.scTypographyHeadingH3LineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyHeadingH3FontWeight,
        "font-size": `${desktop.scTypographyHeadingH3FontSize}px`,
        "margin-bottom": `${desktop.headingH3ParagraphSpacing}px`,
        "text-indent": `${desktop.headingH3Indent}px`,
        "line-height": desktop.scTypographyHeadingH3LineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyHeadingH3FontWeight,
        "font-size": `${bigDesktop.scTypographyHeadingH3FontSize}px`,
        "margin-bottom": `${bigDesktop.headingH3ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.headingH3Indent}px`,
        "line-height": bigDesktop.scTypographyHeadingH3LineHeight,
      },
    },
    ".text-heading-h4": {
      "font-weight": mobile.scTypographyHeadingH4FontWeight,
      "font-size": `${mobile.scTypographyHeadingH4FontSize}px`,
      "margin-bottom": `${mobile.headingH4ParagraphSpacing}px`,
      "text-indent": `${mobile.headingH4Indent}px`,
      "line-height": mobile.scTypographyHeadingH4LineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyHeadingH4FontWeight,
        "font-size": `${tablet.scTypographyHeadingH4FontSize}px`,
        "margin-bottom": `${tablet.headingH4ParagraphSpacing}px`,
        "text-indent": `${tablet.headingH4Indent}px`,
        "line-height": tablet.scTypographyHeadingH4LineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyHeadingH4FontWeight,
        "font-size": `${desktop.scTypographyHeadingH4FontSize}px`,
        "margin-bottom": `${desktop.headingH4ParagraphSpacing}px`,
        "text-indent": `${desktop.headingH4Indent}px`,
        "line-height": desktop.scTypographyHeadingH4LineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyHeadingH4FontWeight,
        "font-size": `${bigDesktop.scTypographyHeadingH4FontSize}px`,
        "margin-bottom": `${bigDesktop.headingH4ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.headingH4Indent}px`,
        "line-height": bigDesktop.scTypographyHeadingH4LineHeight,
      },
    },
    ".text-lead": {
      "font-weight": mobile.scTypographyTextLeadFontWeight,
      "font-size": `${mobile.scTypographyTextLeadFontSize}px`,
      "margin-bottom": `${mobile.TextLeadParagraphSpacing}px`,
      "text-indent": `${mobile.TextLeadIndent}px`,
      "line-height": mobile.scTypographyTextLeadLineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyTextLeadFontWeight,
        "font-size": `${tablet.scTypographyTextLeadFontSize}px`,
        "margin-bottom": `${tablet.TextLeadParagraphSpacing}px`,
        "text-indent": `${tablet.TextLeadIndent}px`,
        "line-height": tablet.scTypographyTextLeadLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextLeadFontWeight,
        "font-size": `${desktop.scTypographyTextLeadFontSize}px`,
        "margin-bottom": `${desktop.TextLeadParagraphSpacing}px`,
        "text-indent": `${desktop.TextLeadIndent}px`,
        "line-height": desktop.scTypographyTextLeadLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextLeadFontWeight,
        "font-size": `${bigDesktop.scTypographyTextLeadFontSize}px`,
        "margin-bottom": `${bigDesktop.TextLeadParagraphSpacing}px`,
        "text-indent": `${bigDesktop.TextLeadIndent}px`,
        "line-height": bigDesktop.scTypographyTextLeadLineHeight,
      },
    },
    ".text-body-medium": {
      "font-weight": mobile.scTypographyTextBodyMdFontWeight,
      "font-size": `${mobile.scTypographyTextBodyMdFontSize}px`,
      "margin-bottom": `${mobile.TextBodyMdParagraphSpacing}px`,
      "text-indent": `${mobile.TextBodyMdIndent}px`,
      "line-height": mobile.scTypographyTextBodyMdLineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyTextBodyMdFontWeight,
        "font-size": `${tablet.scTypographyTextBodyMdFontSize}px`,
        "margin-bottom": `${tablet.TextBodyMdParagraphSpacing}px`,
        "text-indent": `${tablet.TextBodyMdIndent}px`,
        "line-height": tablet.scTypographyTextBodyMdLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextBodyMdFontWeight,
        "font-size": `${desktop.scTypographyTextBodyMdFontSize}px`,
        "margin-bottom": `${desktop.TextBodyMdParagraphSpacing}px`,
        "text-indent": `${desktop.TextBodyMdIndent}px`,
        "line-height": desktop.scTypographyTextBodyMdLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextBodyMdFontWeight,
        "font-size": `${bigDesktop.scTypographyTextBodyMdFontSize}px`,
        "margin-bottom": `${bigDesktop.TextBodyMdParagraphSpacing}px`,
        "text-indent": `${bigDesktop.TextBodyMdIndent}px`,
        "line-height": bigDesktop.scTypographyTextBodyMdLineHeight,
      },
    },
    ".text-body-large": {
      "font-weight": mobile.scTypographyTextBodyLgFontWeight,
      "font-size": `${mobile.scTypographyTextBodyLgFontSize}px`,
      "margin-bottom": `${mobile.TextBodyLgParagraphSpacing}px`,
      "text-indent": `${mobile.TextBodyLgIndent}px`,
      "line-height": mobile.scTypographyTextBodyLgLineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyTextBodyLgFontWeight,
        "font-size": `${tablet.scTypographyTextBodyLgFontSize}px`,
        "margin-bottom": `${tablet.TextBodyLgParagraphSpacing}px`,
        "text-indent": `${tablet.TextBodyLgIndent}px`,
        "line-height": tablet.scTypographyTextBodyLgLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextBodyLgFontWeight,
        "font-size": `${desktop.scTypographyTextBodyLgFontSize}px`,
        "margin-bottom": `${desktop.TextBodyLgParagraphSpacing}px`,
        "text-indent": `${desktop.TextBodyLgIndent}px`,
        "line-height": desktop.scTypographyTextBodyLgLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextBodyLgFontWeight,
        "font-size": `${bigDesktop.scTypographyTextBodyLgFontSize}px`,
        "margin-bottom": `${bigDesktop.TextBodyLgParagraphSpacing}px`,
        "text-indent": `${bigDesktop.TextBodyLgIndent}px`,
        "line-height": bigDesktop.scTypographyTextBodyLgLineHeight,
      },
    },
    ".text-body-small": {
      "font-weight": mobile.scTypographyTextBodySmFontWeight,
      "font-size": `${mobile.scTypographyTextBodySmFontSize}px`,
      "margin-bottom": `${mobile.TextBodySmParagraphSpacing}px`,
      "text-indent": `${mobile.TextBodySmIndent}px`,
      "line-height": mobile.scTypographyTextBodySmLineHeight,
      [`@media (min-width: ${screens.Sm})`]: {
        "font-weight": tablet.scTypographyTextBodySmFontWeight,
        "font-size": `${tablet.scTypographyTextBodySmFontSize}px`,
        "margin-bottom": `${tablet.TextBodySmParagraphSpacing}px`,
        "text-indent": `${tablet.TextBodySmIndent}px`,
        "line-height": tablet.scTypographyTextBodySmLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextBodySmFontWeight,
        "font-size": `${desktop.scTypographyTextBodySmFontSize}px`,
        "margin-bottom": `${desktop.TextBodySmParagraphSpacing}px`,
        "text-indent": `${desktop.TextBodySmIndent}px`,
        "line-height": desktop.scTypographyTextBodySmLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextBodySmFontWeight,
        "font-size": `${bigDesktop.scTypographyTextBodySmFontSize}px`,
        "margin-bottom": `${bigDesktop.TextBodySmParagraphSpacing}px`,
        "text-indent": `${bigDesktop.TextBodySmIndent}px`,
        "line-height": bigDesktop.scTypographyTextBodySmLineHeight,
      },
    },
  };

  addComponents(components);
};
