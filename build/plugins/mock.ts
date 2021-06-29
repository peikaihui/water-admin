/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^mock\-/,
    mockPath: 'mock',
    // showTime: true,
    localEnabled: !isBuild,
    prodEnabled: false,
    injectCode: `
      import { setupProdMockServer } from '../mock/mock-servicer.ts';
      setupProdMockServer();
      `,
  });
}
