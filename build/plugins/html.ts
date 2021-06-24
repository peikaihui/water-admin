/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite';
import type { ViteEnv } from '../utils';

import html from 'vite-plugin-html';

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_PUBLIC_PATH, VITE_ICON_PATH } = env;

  const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`;

  const getAppConfigSrc = () => {
    return `${path || '/'}_app.config.js?v=${Math.random()}-${new Date().getTime()}`;
  };
  
  const getIconSrc = () => {
    return {
      tag: 'script',
      attrs: {
        src: VITE_ICON_PATH,
      },
    };
  };
  const getAntdStyleSrc = () => {
    return {
      tag: 'link',
      attrs: {
        rel: 'stylesheet',
        src: 'https://unpkg.com/ant-design-vue@2.2.0-beta.4/dist/antd.css',
      },
    };
  };

  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      // Inject data into ejs template
      injectData: {
      },
      // Embed the generated app.config.js file
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppConfigSrc(),
              },
            },
            getIconSrc(),
            // getAntdStyleSrc(),
          ]
        : [
          getIconSrc(),
          // getAntdStyleSrc(),
        ],
    },
  });
  return htmlPlugin;
}
