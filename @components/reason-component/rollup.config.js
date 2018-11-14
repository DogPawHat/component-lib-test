import bucklescript from 'rollup-plugin-bucklescript';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
 
export default {
  input: 'src/index.re',
  output: [{
    file: 'dist/main.js',
    format: 'cjs',
  }, {
    file: 'dist/main.es6.js',
    format: 'es',
  }],
  plugins: [
    bucklescript(),
    resolve(),
    commonJS({
      include: 'node_modules/**'
    })
  ],
  external: ['react', 'react-native']
}