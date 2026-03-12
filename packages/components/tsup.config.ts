import { defineConfig } from "tsup"

export default defineConfig({
  outDir: "build",
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
})
