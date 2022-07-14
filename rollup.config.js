import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
    ],
    external: [],
    plugins: [typescript({ tsconfig: "./tsconfig.build.json" }), terser()],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
  },
];
