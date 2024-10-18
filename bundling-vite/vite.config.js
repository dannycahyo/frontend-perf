import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "terser",
    cssMinify: "lightningcss",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          counter: ["./src/counter.js"],
          moduleB: ["./src/utils.js"],
          modal: ["./src/modal.js"],
        },
      },
    },
  },
});
