import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'

export default {
  input: 'app/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    typescript({ module: 'ESNext' }),
    replace({
      'Object.defineProperty(exports, "__esModule", { value: true });': '',
      delimiters: ['\r\n', '\r\n'],
      preventAssignment: true
    })
  ]
}
