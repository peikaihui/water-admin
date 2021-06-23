import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { argv } from 'yargs';

export interface ArgvType {
  [x: string]: unknown;
  _: (string | number)[];
  $0: string;
  mode?: string;
}

export interface ViteEnv {
  VITE_PORT: number;
  VITE_DROP_CONSOLE: boolean;
  VITE_USE_IMAGEMIN: boolean;
  VITE_USE_AUTH: boolean;
  VITE_USE_MOCK: boolean;
  VITE_REPORT: boolean;
  VITE_API: string;
  VITE_PUBLIC_PATH: string;
  VITE_PREFIX: string;
  VITE_OUTPUT_DIR: string;
}

export const envDir = `${process.cwd()}/build/env`;

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: any): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;
    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
const confFiles = {
  test: ['.env.test', '.env.test.local'],
  production: ['.env.production', '.env.production.local'],
}
export function getEnvConfig(match = 'VITE_') {
  let envConfig = {};
  const mode = (argv as ArgvType).mode || 'test';
  confFiles[mode].forEach((item) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(envDir, item)));
      envConfig = { ...envConfig, ...env };
    } catch (error) {}
  });
  Object.keys(envConfig).forEach((key) => {
    const reg = new RegExp(`^(${match})`);
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });

  return envConfig;
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getCwdPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}

export function pathResolve(dir: string) {
  return path.resolve(__dirname, '../', dir);
}

export const getShortName = () => {
  return `__PRODUCTION____APP__CONF__`
    .toUpperCase()
    .replace(/\s/g, '');
};
