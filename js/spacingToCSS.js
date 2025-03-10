const fs = require("fs");
const spacing = require("../tokens/breakpoints.json");

// Función para convertir camelCase a kebab-case
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Mapeo de breakpoints (excluimos mobile, que es el valor base)
const breakpointMapping = {
  tablet: "768px",
  desktop: "1440px",
  bigDesktop: "2560px"
};

function generateThemeVariables(spacing) {
  // Usamos "mobile" como base
  const base = spacing.mobile;
  let themeBlock = "@theme static {\n";
  let rootBlock = ":root {\n";
  
  // Recorremos cada clave definida en mobile para crear la variable
  for (const key in base) {
    const varName = `--spacing-${camelToKebab(key)}`;
    const mobileValue = base[key];
    
    // Agregamos al bloque @theme static
    themeBlock += `  ${varName}: var(${varName});\n`;
    
    // Agregamos al bloque :root (valor base)
    rootBlock += `  ${varName}: ${mobileValue}px;\n`;
    
    // Para cada breakpoint adicional, agregamos su valor si existe en el JSON
    for (const bp in breakpointMapping) {
      if (spacing[bp] && spacing[bp][key] !== undefined) {
        const bpValue = spacing[bp][key];
        const bpMedia = breakpointMapping[bp];
        rootBlock += `  @media (min-width: ${bpMedia}){\n    ${varName}: ${bpValue}px;\n  }\n`;
      }
    }
    
    // Separamos cada variable con una línea en blanco
    rootBlock += "\n";
  }
  
  themeBlock += "}\n\n";
  rootBlock += "}\n";
  
  return themeBlock + rootBlock;
}

const cssOutput = generateThemeVariables(spacing);
fs.writeFileSync("./src/parts/spacing.css", cssOutput, "utf8");

console.log("Archivo CSS generado correctamente en 'spacing.css'.");
