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
      "margin-bottom": `${mobile.scTypographyHeadingH3ParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyHeadingH3Indent}px`,
      "line-height": mobile.scTypographyHeadingH3LineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyHeadingH3FontWeight,
        "font-size": `${tablet.scTypographyHeadingH3FontSize}px`,
        "margin-bottom": `${tablet.scTypographyHeadingH3ParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyHeadingH3Indent}px`,
        "line-height": tablet.scTypographyHeadingH3LineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyHeadingH3FontWeight,
        "font-size": `${desktop.scTypographyHeadingH3FontSize}px`,
        "margin-bottom": `${desktop.scTypographyHeadingH3ParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyHeadingH3Indent}px`,
        "line-height": desktop.scTypographyHeadingH3LineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyHeadingH3FontWeight,
        "font-size": `${bigDesktop.scTypographyHeadingH3FontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyHeadingH3ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyHeadingH3Indent}px`,
        "line-height": bigDesktop.scTypographyHeadingH3LineHeight,
      },
    },
    ".text-heading-h4": {
      "font-weight": mobile.scTypographyHeadingH4FontWeight,
      "font-size": `${mobile.scTypographyHeadingH4FontSize}px`,
      "margin-bottom": `${mobile.scTypographyHeadingH4ParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyHeadingH4Indent}px`,
      "line-height": mobile.scTypographyHeadingH4LineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyHeadingH4FontWeight,
        "font-size": `${tablet.scTypographyHeadingH4FontSize}px`,
        "margin-bottom": `${tablet.scTypographyHeadingH4ParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyHeadingH4Indent}px`,
        "line-height": tablet.scTypographyHeadingH4LineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyHeadingH4FontWeight,
        "font-size": `${desktop.scTypographyHeadingH4FontSize}px`,
        "margin-bottom": `${desktop.scTypographyHeadingH4ParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyHeadingH4Indent}px`,
        "line-height": desktop.scTypographyHeadingH4LineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyHeadingH4FontWeight,
        "font-size": `${bigDesktop.scTypographyHeadingH4FontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyHeadingH4ParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyHeadingH4Indent}px`,
        "line-height": bigDesktop.scTypographyHeadingH4LineHeight,
      },
    },
    ".text-lead": {
      "font-weight": mobile.scTypographyTextLeadFontWeight,
      "font-size": `${mobile.scTypographyTextLeadFontSize}px`,
      "margin-bottom": `${mobile.scTypographyTextLeadParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyTextLeadIndent}px`,
      "line-height": mobile.scTypographyTextLeadLineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyTextLeadFontWeight,
        "font-size": `${tablet.scTypographyTextLeadFontSize}px`,
        "margin-bottom": `${tablet.scTypographyTextLeadParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyTextLeadIndent}px`,
        "line-height": tablet.scTypographyTextLeadLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextLeadFontWeight,
        "font-size": `${desktop.scTypographyTextLeadFontSize}px`,
        "margin-bottom": `${desktop.scTypographyTextLeadParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyTextLeadIndent}px`,
        "line-height": desktop.scTypographyTextLeadLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextLeadFontWeight,
        "font-size": `${bigDesktop.scTypographyTextLeadFontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyTextLeadParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyTextLeadIndent}px`,
        "line-height": bigDesktop.scTypographyTextLeadLineHeight,
      },
    },
    ".text-body-medium": {
      "font-weight": mobile.scTypographyTextBodyMdFontWeight,
      "font-size": `${mobile.scTypographyTextBodyMdFontSize}px`,
      "margin-bottom": `${mobile.scTypographyTextBodyMdParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyTextBodyMdIndent}px`,
      "line-height": mobile.scTypographyTextBodyMdLineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyTextBodyMdFontWeight,
        "font-size": `${tablet.scTypographyTextBodyMdFontSize}px`,
        "margin-bottom": `${tablet.scTypographyTextBodyMdParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyTextBodyMdIndent}px`,
        "line-height": tablet.scTypographyTextBodyMdLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextBodyMdFontWeight,
        "font-size": `${desktop.scTypographyTextBodyMdFontSize}px`,
        "margin-bottom": `${desktop.scTypographyTextBodyMdParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyTextBodyMdIndent}px`,
        "line-height": desktop.scTypographyTextBodyMdLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextBodyMdFontWeight,
        "font-size": `${bigDesktop.scTypographyTextBodyMdFontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyTextBodyMdParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyTextBodyMdIndent}px`,
        "line-height": bigDesktop.scTypographyTextBodyMdLineHeight,
      },
    },
    ".text-body-large": {
      "font-weight": mobile.scTypographyTextBodyLgFontWeight,
      "font-size": `${mobile.scTypographyTextBodyLgFontSize}px`,
      "margin-bottom": `${mobile.scTypographyTextBodyLgParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyTextBodyLgIndent}px`,
      "line-height": mobile.scTypographyTextBodyLgLineHeight,
      [`@media (min-width: ${screens.md})`]: {
        "font-weight": tablet.scTypographyTextBodyLgFontWeight,
        "font-size": `${tablet.scTypographyTextBodyLgFontSize}px`,
        "margin-bottom": `${tablet.scTypographyTextBodyLgParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyTextBodyLgIndent}px`,
        "line-height": tablet.scTypographyTextBodyLgLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextBodyLgFontWeight,
        "font-size": `${desktop.scTypographyTextBodyLgFontSize}px`,
        "margin-bottom": `${desktop.scTypographyTextBodyLgParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyTextBodyLgIndent}px`,
        "line-height": desktop.scTypographyTextBodyLgLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextBodyLgFontWeight,
        "font-size": `${bigDesktop.scTypographyTextBodyLgFontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyTextBodyLgParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyTextBodyLgIndent}px`,
        "line-height": bigDesktop.scTypographyTextBodyLgLineHeight,
      },
    },
    ".text-body-small": {
      "font-weight": mobile.scTypographyTextBodySmFontWeight,
      "font-size": `${mobile.scTypographyTextBodySmFontSize}px`,
      "margin-bottom": `${mobile.scTypographyTextBodySmParagraphSpacing}px`,
      "text-indent": `${mobile.scTypographyTextBodySmIndent}px`,
      "line-height": mobile.scTypographyTextBodySmLineHeight,
      [`@media (min-width: ${screens.Sm})`]: {
        "font-weight": tablet.scTypographyTextBodySmFontWeight,
        "font-size": `${tablet.scTypographyTextBodySmFontSize}px`,
        "margin-bottom": `${tablet.scTypographyTextBodySmParagraphSpacing}px`,
        "text-indent": `${tablet.scTypographyTextBodySmIndent}px`,
        "line-height": tablet.scTypographyTextBodySmLineHeight,
      },
      [`@media (min-width: ${screens.lg})`]: {
        "font-weight": desktop.scTypographyTextBodySmFontWeight,
        "font-size": `${desktop.scTypographyTextBodySmFontSize}px`,
        "margin-bottom": `${desktop.scTypographyTextBodySmParagraphSpacing}px`,
        "text-indent": `${desktop.scTypographyTextBodySmIndent}px`,
        "line-height": desktop.scTypographyTextBodySmLineHeight,
      },
      [`@media (min-width: ${screens.xl})`]: {
        "font-weight": bigDesktop.scTypographyTextBodySmFontWeight,
        "font-size": `${bigDesktop.scTypographyTextBodySmFontSize}px`,
        "margin-bottom": `${bigDesktop.scTypographyTextBodySmParagraphSpacing}px`,
        "text-indent": `${bigDesktop.scTypographyTextBodySmIndent}px`,
        "line-height": bigDesktop.scTypographyTextBodySmLineHeight,
      },
    },
  };

  addComponents(components);
};
