import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

// Load environment variables với prefix VITE_ (tương tự Vite)
// Theo tài liệu: https://rsbuild.rs/guide/advanced/env-vars#custom-prefix
const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    template: "./public/index.html",
  },
  // Inject các biến môi trường có prefix VITE_ vào client code
  source: {
    define: publicVars,
  },
});
