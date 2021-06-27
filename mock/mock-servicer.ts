/** @format */

import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modulesDef = import.meta.globEager('./**/*.ts');
const modules = import.meta.globEager('../../mock/**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/mock\-')) {
    return;
  }
  mockModules.push(...modulesDef[key].default);
  mockModules.push(...modules[key].default);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
