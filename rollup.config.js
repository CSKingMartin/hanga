import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-auto-external'
import { eslint } from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

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
    postcss({
      modules: true,
      extract: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx', '.css']
    }),
    commonjs()
  ]
}
