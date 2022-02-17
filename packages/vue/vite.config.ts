import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9002,
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: "src/main.ts",
      output: {
        esModule: true,
        format: "system",
        dir: "dist",
      },
      preserveEntrySignatures: "strict",
    },
  },
});
