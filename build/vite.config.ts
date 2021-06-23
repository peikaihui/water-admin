import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite'

import { wrapperEnv, pathResolve, envDir } from './utils';
import { createVitePlugins } from './plugins';

// https://cn.vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, envDir);
  const viteEnv = wrapperEnv(env);
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
    VITE_DROP_CONSOLE,
    VITE_OUTPUT_DIR,
  } = viteEnv;
  const isBuild = command === 'build';

  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: createVitePlugins(viteEnv, isBuild),
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
        {
          // ~assets/xxxx  =>  src/assets/xxx
          find: /^\~utils/,
          replacement: `${pathResolve('src')}/utils`,
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

