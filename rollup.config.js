import typescript from 'rollup-plugin-typescript2'; 
import babel from '@rollup/plugin-babel';

export default [
    {
        input: 'src/index.ts',
        output: [
            { file: 'dist/index.js', format: 'cjs' },
            { file: 'dist/index.esm.js', format: 'es' },
            {file:'dist/indes.iife.js',format:'iife',name:'test'}
        ],
        plugins: [
            typescript(), // typescript 转义
            babel({
                babelrc: false,
                presets: [['@babel/preset-env', { modules: false, loose: true }]],
                plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
                exclude: 'node_modules/**',
            })
        ],
    }
];