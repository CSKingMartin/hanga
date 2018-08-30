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
    eslint({
      include: '**/*.{js,jsx}'
    }),
    external(),
    postcss({
      extensions: ['.css'],
      modules: true,
      extract: true
    }),
    babel({
      include: '**/*.{js,jsx}',
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs()
  ]
}
