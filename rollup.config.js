import path from 'path';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import ttypescript from 'ttypescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import bundleScss from 'rollup-plugin-bundle-scss';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {})
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    json(),
    nodeResolve({
      preferBuiltins: true
    }),
    typescript({
      tsconfig: './tsconfig.rollup.json',
      typescript: ttypescript
    }),
    bundleScss({
      bundlerOptions: {
        project: path.resolve(__dirname, './cases/tilde-import'),
        ignoreImports: ['~govuk-frontend/*.*']
      }
    })
  ]
};
