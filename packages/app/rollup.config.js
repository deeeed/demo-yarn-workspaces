import typescript from "@rollup/plugin-typescript";
import jscc from "rollup-plugin-jscc";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: "src/app.ts",
    output: {
      dir: "dist",
      format: "cjs",
    },
    plugins: [jscc({values: { _WEB: 1 },}), typescript({ tsconfig: "tsconfig.json" })],
  },
];

export default config;
