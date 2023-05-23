import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  // ssr: {
  //   noExternal: true
  // },
  build: {
    // ssr: true,
    minify: true,
    lib: {
      entry: "src/index.ts",
      formats: ["cjs", "es"],
      fileName: "index"
    }
  }
});
