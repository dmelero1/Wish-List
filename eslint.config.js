import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { files: ["*/.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ["*/.js", "*/.jsx"], // Aplica las reglas a archivos .js y .jsx
    extends: ["airbnb-base"], // Si usas React, cambia a "airbnb"
    rules: {
      // Aquí puedes sobrescribir reglas específicas
      "no-console": "off", // Ejemplo: Permitir console.log
    },
  },
];
