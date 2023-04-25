import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>Design Wiki</strong>,
  project: {
    link: "https://github.com/sheisacreative/design-for-developers-wiki",
  },
  primaryHue: {
    dark: 180,
    light: 260,
  },
  docsRepositoryBase:
    "https://github.com/sheisacreative/design-for-developers-wiki",
  footer: {
    text: `© Maiane Gabriele (@sheisacreative) ${new Date().getFullYear()}.`,
  },
};

export default config;
