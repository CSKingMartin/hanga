import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-auto-external'
import { eslint } from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

const plugins = [
  eslint({
    include: '**/*.{js,jsx}'
  }),
  external(),
  postcss({
    extensions: ['.css']
  }),
  babel({
    include: '**/*.{js,jsx}',
    exclude: 'node_modules/**'
  }),
  resolve({
    extensions: ['.js', '.jsx']
  }),
  commonjs({
    include: 'node_modules/**'
  })
]

const createOutput = config => [
  {
    file: config.main,
    format: 'cjs',
    sourcemap: true
  },
  {
    file: config.module,
    format: 'es',
    sourcemap: true
  }
]

const createEntry = (input, output) => ({
  plugins,
  input,
  output: createOutput({
    main: `dist/${output}.js`,
    module: `dist/${output}.es.js`
  })
})

export default [
  createEntry('lib/index.js', 'index'),
  createEntry('lib/Catalog/index.js', 'catalog'),
  createEntry('lib/Editor/index.js', 'editor'),
  createEntry('lib/Specimen/index.js', 'specimen'),
  createEntry('lib/Viewer/index.js', 'viewer')
]
