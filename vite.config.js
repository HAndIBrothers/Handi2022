import { defineConfig } from "vite";
import { viteJs13k } from "./plugins/vite-js13k";

export default defineConfig({
  server: {
    port: 3000,
    open: "http://localhost:3000/",
  },

  plugins: [viteJs13k()],

  build: {
    minify: "terser",
    terserOptions: {
      toplevel: true,
      compress: {
        passes: 2,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_math: true,
        drop_console: true,
      },
      mangle: { properties: "true" },
      module: true,
    },
    assetsInlineLimit: 100000000,
  },
});
