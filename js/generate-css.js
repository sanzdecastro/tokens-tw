#!/usr/bin/env node
/**
 * generate-css.js
 *
 * Modo de uso:
 *   1. Coloca este archivo en la carpeta "scripts/" (u otra) de tu proyecto.
 *   2. Ajusta las rutas de require() a donde tengas tus JSON.
 *   3. Ejecuta: node scripts/generate-css.js
 *   4. Se generará "tokens.css" en "src/tokens/" (según la ruta que configures).
 */

const fs = require('fs');
const path = require('path');

// ========== 1. Cargar los JSON ==========
// Ajusta las rutas según tu proyecto
const colors = require('../tokens/colors.json');
const themes = require('../tokens/themes2.json');

// ========== 2. Funciones de ayuda ==========

/**
 * Genera variables globales para cada color en colors.json,
 * con formato: { "--stone-50": "#fafaf9", "--red-600": "#dc2626", ... }
 */
function generateGlobalColorVars(colorsObj) {
  const vars = {};
  for (const [colorKey, shadesOrVal] of Object.entries(colorsObj)) {
    // colorKey puede ser "base", "stone", "red", etc.
    if (typeof shadesOrVal === 'object') {
      for (const [shade, data] of Object.entries(shadesOrVal)) {
        // shade puede ser "50", "900", "white", etc.
        const varName = `--${colorKey}-${shade}`; // p.ej. --stone-100
        const varValue = data.value;             // p.ej. "#f5f5f4"
        vars[varName] = varValue;
      }
    }
  }
  return vars;
}

/**
 * Dada una referencia del tipo "{stone.900}",
 * retorna "var(--stone-900)" para usarlo como variable CSS.
 */
function getReferenceAsCssVar(ref) {
  // ref = "{stone.900}"
  const cleanRef = ref.replace(/[{}]/g, ''); // => "stone.900"
  const [colorName, shade] = cleanRef.split('.');
  return `var(--${colorName}-${shade})`;
}

/**
 * Recorre un objeto de tema (por ejemplo "lightParticular") y devuelve
 * un objeto con variables: { "--theme-background": "var(--base-white)", ... }.
 * Si encuentra "value": "{stone.900}", usa `getReferenceAsCssVar`.
 * Si encuentra un valor hex directo, lo usa tal cual.
 * Si encuentra un objeto anidado ("sidebar": {...}), baja recursivamente.
 */
function generateThemeVariables(themeObj) {
  const result = {};

  function traverse(obj, prefix = '') {
    for (const [key, val] of Object.entries(obj)) {
      if (
        val &&
        typeof val === 'object' &&
        'value' in val &&
        typeof val.value === 'string'
      ) {
        // key = "background", val = { value: "{base.white}", type: "color" }, etc.
        const varName = `--theme-${prefix ? prefix + '-' : ''}${key}`;
        
        if (val.value.startsWith('{')) {
          // Es una referencia, p.e. "{stone.900}"
          result[varName] = getReferenceAsCssVar(val.value);
        } else {
          // Valor hex directo
          result[varName] = val.value;
        }
      } else if (val && typeof val === 'object' && !Array.isArray(val)) {
        // Si es un objeto anidado, recursión
        // Construimos un "prefix" para que en CSS sea algo como "--theme-sidebar-background"
        traverse(val, prefix ? prefix + '-' + key : key);
      }
    }
  }

  traverse(themeObj);
  return result;
}

/**
 * Construye un bloque CSS con las variables. Ej:
 *   selector = ":root"
 *   vars = { "--theme-background": "var(--stone-50)", ... }
 *
 * Retorna un string:
 * :root {
 *   --theme-background: var(--stone-50);
 *   ...
 * }
 */
function buildCssVarsBlock(selector, varsObj) {
  let css = `${selector} {\n`;
  for (const [varName, varValue] of Object.entries(varsObj)) {
    css += `  ${varName}: ${varValue};\n`;
  }
  css += `}\n`;
  return css;
}

// ========== 3. Generar variables globales (:root) para la escala de colores ==========

const globalVars = generateGlobalColorVars(colors);
const globalBlock = buildCssVarsBlock(':root', globalVars);

// ========== 4. Filtrar los temas "1-Themes/...": omitir el primero y fusionar el resto ==========

// 4.1. Obtener todas las claves que empiecen con "1-Themes/"
const allThemeKeys = Object.keys(themes).filter((key) => key.startsWith('1-Themes/'));

// 4.2. Ordenar (opcional) y dividir
allThemeKeys.sort(); 
const [firstThemeKey, ...remainingThemeKeys] = allThemeKeys;

console.log('Primer tema (omitido):', firstThemeKey);
console.log('Temas restantes (fusionados):', remainingThemeKeys);

// 4.3. Combinar variables de todos los temas restantes
let mergedVars = {};

for (const themeKey of remainingThemeKeys) {
  const themeObj = themes[themeKey];
  if (!themeObj) {
    console.warn(`Advertencia: tema "${themeKey}" no encontrado en themes.json`);
    continue;
  }
  const varsForThisTheme = generateThemeVariables(themeObj);
  // Merge superficial
  mergedVars = { ...mergedVars, ...varsForThisTheme };
}

// ========== 5. Crear el bloque [data-theme="darkPro"] con las variables fusionadas ==========

const mergedBlock = buildCssVarsBlock('[data-theme="darkPro"]', mergedVars);

// ========== 6. Concatenar y guardar ==========

const finalCSS = `${globalBlock}\n\n${mergedBlock}`;
const outPath = path.join(__dirname, '..', 'src', 'tokens.css');

fs.writeFileSync(outPath, finalCSS, 'utf8');
console.log(`Generado tokens.css en: ${outPath}`);
