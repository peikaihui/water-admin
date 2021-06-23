import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { wrapperEnv, pathResolve, envDir } from './utils';

// https://cn.vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, envDir);
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
    VITE_DROP_CONSOLE,
    VITE_OUTPUT_DIR,
  } = wrapperEnv(env);

  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [vue()],
    server: {
      port: VITE_PORT || 3000,
      hmr: {
        overlay: true,
      },
    },
    resolve: {
      alias: [
        // {
        //   find: /^vue$/,
        //   replacement: 'https://esm.sh/vue@next',
        // },
        {
          // @@xxxx  =>  src/xxx
          find: /^\@@/,
          replacement: `${pathResolve('src')}/`,
        },
        {
          // ~assets/xxxx  =>  src/assets/xxx
          find: /^\~assets/,
          replacement: `${pathResolve('src')}/assets`,
        },
      ],
    },
    build: {
      outDir: VITE_OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 1200,
    },
    envDir,
    // build: {
      // rollupOptions: {
      //   external: [
      //     'vue',
      //     'ant-design-vue',
      //   ],
      // }
    // }
    // optimizeDeps: {
    //   exclude: ['@fe6/water-pro', '@babel/runtime']
    // },
  }
};

