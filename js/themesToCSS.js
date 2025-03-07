const fs = require("fs");
const themes = require("../tokens/themes.json");

// Función para convertir HEX a HSL
function hexToHsl(hex) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // Escala de grises
  } else {
    const delta = max - min;
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h *= 60;
  }

  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

// Función para convertir camelCase a kebab-case
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Genera CSS a partir del JSON
function generateCss(themes) {
  const entries = Object.entries(themes);
  const firstThemeName = entries[0][0];
  const firstThemeColors = entries[0][1];

  const rootVariables = Object.entries(firstThemeColors)
    .map(([key, hex]) => `  --color-${camelToKebab(key)}: ${hexToHsl(hex)};`)
    .join("\n");

  const otherThemes = entries.slice(1).map(([themeName, colors]) => {
    const variables = Object.entries(colors)
      .map(([key, hex]) => `  --color-${camelToKebab(key)}: ${hexToHsl(hex)};`)
      .join("\n");
    return `[data-theme="${themeName}"] {\n${variables}\n}`;
  });

  return `@theme {\n${rootVariables}\n}\n\n${otherThemes.join("\n\n")}`;
}

// Convierte los temas a CSS
const cssOutput = generateCss(themes);

// Escribe el CSS en un archivo
fs.writeFileSync("./src/parts/themes.css", cssOutput, "utf8");

console.log("Archivo CSS generado correctamente en 'themes.css'.");
