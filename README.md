
# **Traducción de Figma con TailwindCSS**

Este proyecto traduce los tokens y variables definidos en el proyecto de Figma para la generación de estilos reutilizables a través de **Tailwind CSS**.

Desde Figma, necesitamos exportar a través del plugin Figma Variables to JSON:
1. Tipografías semánticas al archivo: tokens/typographic-semantic.json
2. Temas al archivo: tokens/themes.json

Se pueden incluir otras variables de CSS a través del plugin Variables2CSS (para aquellas variables que no son exportables desde Figma con un formato válido como el letter-spacing).



## **Índice**
1. [Resumen del flujo](#resumen-del-flujo)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación](#instalación)
4. [Scripts del Proyecto](#scripts-del-proyecto)
5. [Estructura del Proyecto](#estructura-del-proyecto)

---

## **Resumen del flujo**
A partir de los documentos json de tokens exportados de Figma, el proyecto traduce los tokens a clases reutilizables que podrán usarse tanto en archivos CSS como en los archivos HTML.

### Parte 1
Exportación de los tokens de tipografías semánticas y temas a la carpeta de tokens en formato JSON a través del plugin Figma Variables to JSON.

### Parte 2
Importación al archivo tailwind.config.js de:
1. Las claves de variables de colores (tailwind-parts/colors.js) 

2. Las claves de tipografía (tailwind-parts/typography.js).

### Parte 3
Ejecución de un archivo de configuración de Tailwind que generará las claves necesarias a partir de los tokens anteriores y de otras variables definidas o generadas en src/parts e importadas en el archivo src/input.css.

Tailwind genera un documento CSS con clases y variables de CSS en src/output.css para desarrollo o en dist/output con el comando de producción (CSS minificado).

## **Requisitos Previos**
Antes de empezar, asegúrate de tener instalados los siguientes:
- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/)

---

## **Instalación**
1. Clona este repositorio

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

---

## **Scripts del Proyecto**

El archivo `package.json` incluye los siguientes scripts:

| Comando               | Descripción                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------------------|
| `npm run themes-to-css` | Genera las variables CSS a partir de los temas definidos en `tokens/themes.json` en el archivo `themes.css` ubicado en src/parts. Al ejecutar TailWind, se incluirán desde aquí las variables CSS root y asociadas a cada tema. |
| `npm run dev`          | Genera las variables CSS (ejecutando el comando anterior) y compila los estilos de TailwindCSS en modo desarrollo (`--watch`). |
| `npm run build`        | Compila los estilos de TailwindCSS en modo producción (`--minify`).                           |

---

## **Estructura del Proyecto**

```plaintext
.
├── js/
│   └── themesToCSS.js           # Script para generar variables CSS a partir de los temas en JSON.
│
├── src/
│   ├── parts
│   │   ├── font-face.css        # Definición de tipografías
│   │   ├── letter-spacing.css   # Definición de variables de letter-spacing 
│   │   └── themes.css           # Archivo de variables de tema generado por el script themes-to-css
│   ├── input.css                # Archivo base para estilos de TailwindCSS.
│   └── output.css               # Archivo generado por TailwindCSS (desarrollo).
│
├── dist/
│   └── output.css               # Archivo generado por TailwindCSS (producción).
│
├── tokens  
│   ├── themes.json              # Archivo JSON exportado a través de Figma Variables to JSON
│   └── typography-semantic.json # Archivo JSON exportado a través de Figma Variables to JSON  
│     
├── package.json                 # Archivo de configuración del proyecto.
├── tailwind.config.js           # Archivo de configración de Tailwind
│
├── tailwind-parts  
│   ├── colors.js                # Definiciones de nombres de colores asociados a variables CSS
│   └── typography.js            # Definiciones de tipografías para Tailwind
│
├── utilities 
│   └── custom-utilities         # Plugin para generar desde Tailwind los tamaños de tipografía para cada breakpoint utilizando el json de tokens/typography-semantic.json 
│
└── index.html                   # Ejemplo de uso en HTML
└── README.md                    # Documentación del proyecto.
```

---
