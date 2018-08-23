import { eslint } from 'rollup-plugin-eslint'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-auto-external'

import pkg from './package.json'

export default {
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    eslint(),
    external(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs()
  ]
}
