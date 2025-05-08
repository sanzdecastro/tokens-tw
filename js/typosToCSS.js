const fs = require("fs");
const text = require("../tokens/typography-semantic.json");

// Función para convertir camelCase a kebab-case
function camelToKebab(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

// Función para ajustar el nombre de la variable eliminando "heading" y "text" de la ruta deseada
function adjustVarName(varName) {
  return varName
    .replace("sc-typography-heading-", "sc-typography-")
    .replace("sc-typography-text-", "sc-typography-");
}

// Función para determinar y agregar "px" cuando corresponda o envolver en comillas si es fontBase
function addUnit(key, value) {
  // Si es número y la propiedad sugiere dimensión, se agrega "px"
  if (
    typeof value === "number" &&
    (key.toLowerCase().includes("fontsize") ||
      key.toLowerCase().includes("paragraphspacing") ||
      key.toLowerCase().includes("indent"))
  ) {
    return `${value}px`;
  }
  // Si es string y la propiedad es un fontBase, envolver en comillas dobles si no las tiene ya.
  if (typeof value === "string" && key.toLowerCase().includes("fontbase")) {
    if (!value.startsWith('"') && !value.startsWith("'")) {
      return `"${value}"`;
    }
  }
  return value;
}

// Función para generar el bloque CSS de variables para cada breakpoint
function generateCssBlock(breakpoint, data) {
  let css = "";
  if (breakpoint) {
    css += `@variant ${breakpoint} {\n  :root {\n`;
  } else {
    css += `:root {\n`;
  }
  for (const [key, value] of Object.entries(data)) {
    // Convertir la llave a kebab-case y ajustar el nombre de la variable
    const varName = `--${adjustVarName(camelToKebab(key))}`;
    css += `    ${varName}: ${addUnit(key, value)};\n`;
  }
  css += breakpoint ? "  }\n}\n" : "}\n";
  return css;
}

// Función para generar estilos para cada heading (h1, h2, h3, h4) utilizando las variables CSS
function generateHeadingStyles() {
  const headings = ["h1", "h2", "h3", "h4", "lead", "body-lg", "body-md", "body-sm"];
  let css = "";
  headings.forEach(heading => {
    css += `.text-${heading} {\n`;
    css += `  /* Usamos la variable correspondiente para la fuente */\n`;
    css += `  font-family: var(--sc-typography-${heading}-font-base);\n`;
    css += `  font-weight: var(--sc-typography-${heading}-font-weight);\n`;
    css += `  font-size: var(--sc-typography-${heading}-font-size);\n`;
    css += `  line-height: var(--sc-typography-${heading}-line-height);\n`;
    css += `  letter-spacing: var(--sc-typography-${heading}-letter-spacing);\n`;
    css += `  margin-bottom: var(--sc-typography-${heading}-paragraph-spacing);\n`;
    css += `  text-indent: var(--sc-typography-${heading}-indent);\n`;
    css += `  font-feature-settings: var(--sc-typography-${heading}-font-feature-settings);\n`;
    css += `  font-variant-numeric: var(--sc-typography-${heading}-font-variant-numeric);\n`;
    css += `}\n\n`;
  });
  return css;
}

// Definimos los breakpoints deseados (por ejemplo, tablet: 768px, desktop: 1024px, bigDesktop: 1440px)
let cssOutput = "";
// Valores por defecto (mobile)
cssOutput += generateCssBlock(null, text.mobile);
cssOutput += "\n" + generateCssBlock("md", text.tablet);
cssOutput += "\n" + generateCssBlock("lg", text.desktop);
cssOutput += "\n" + generateCssBlock("xl", text.bigDesktop);

// Agregamos los estilos generados para los headings
cssOutput += "\n" + generateHeadingStyles();

// Mostramos el resultado en consola
console.log(cssOutput);

fs.mkdirSync("./src/parts", { recursive: true });
fs.writeFileSync("./src/parts/text.css", cssOutput, { encoding: "utf-8" });
console.log("El archivo se ha guardado en ./src/parts/text.css");
