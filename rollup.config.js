// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import obfuscator from 'rollup-plugin-obfuscator';

export default [
  // ESModule (ESM) 빌드 설정
  {
    input: 'dist/esm/calcular.js', // TypeScript 빌드 후의 ESM 파일
    output: {
      file: 'dist/esm/calcular.js',
      format: 'esm',
    },
    plugins: [
      terser({
        compress: {
          pure_funcs: ['console.log'], // console.log만 제거
        },
        mangle: true,
      }),
      obfuscator({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: false,
      }),
    ],
  },
  // 브라우저용 빌드 설정
  {
    input: 'dist/esm/calcular.js', // 브라우저용으로 빌드할 원본 파일
    output: {
      file: 'dist/browser/calcular.js',
      format: 'iife', // 즉시 실행 함수 형태로 브라우저 환경에서 사용
      name: 'Calcular', // 전역 객체에 접근할 수 있는 이름
    },
    plugins: [
      terser({
        compress: {
          pure_funcs: ['console.log'], // console.log만 제거
        },
        mangle: true,
      }),
      obfuscator({
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: false,
        debugProtectionInterval: false,
        disableConsoleOutput: false,
      }),
    ],
  },
];
