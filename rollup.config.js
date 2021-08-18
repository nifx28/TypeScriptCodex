import merge from 'deepmerge'
import { createBasicConfig } from '@open-wc/building-rollup'
import replace from '@rollup/plugin-replace'

const baseConfig = createBasicConfig()

export default merge(baseConfig, {
    input: './dist/app/index.js',
    output: {
        dir: 'dist'
    },
    plugins: [
      replace({
        'Object.defineProperty(exports, "__esModule", { value: true });': '',
        delimiters: ['\r\n', '\r\n'],
        preventAssignment: true
      })
    ]
})
