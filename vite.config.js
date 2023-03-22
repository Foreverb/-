import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "styles",
        replacement: path.resolve(__dirname, "src/assets/styles"),
      },
      {
        find: "js",
        replacement: path.resolve(__dirname, "src/assets/js"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "data",
        replacement: path.resolve(__dirname, "src/assets/data"),
      },
      {
        find: "utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
    ],
  },
});
