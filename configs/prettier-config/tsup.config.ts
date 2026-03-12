import { defineConfig } from "tsup"

export default defineConfig({
  outDir: "build",
  entry: ["prettier.config.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
})
