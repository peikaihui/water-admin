/**
 * Generate additional configuration files when used for packaging. The file can be configured with some global variables, so that it can be changed directly externally without repackaging
 */
import fs, { writeFileSync } from 'fs-extra';
import chalk from 'chalk';

import { getCwdPath, getEnvConfig, getShortName } from '../utils';

import pkg from '../../package.json';

function createConfig(
  {
    configName,
    config,
    configFileName = '_app.config.js',
  }: { configName: string; config: any; configFileName?: string } = { configName: '', config: {} }
) {
  try {
    const windowConf = `window.${configName}`;
    const { VITE_OUTPUT_DIR } = config;
    // Ensure that the variable will not be modified
    const configStr = `${windowConf}=${JSON.stringify(config)};
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '');
    fs.mkdirp(getCwdPath(VITE_OUTPUT_DIR));
    writeFileSync(getCwdPath(`${VITE_OUTPUT_DIR}/${configFileName}`), configStr);

    console.log(chalk.cyan(`\n✨ [${pkg.name}]`) + ` - 配置文件打包成功:`);
    console.log(chalk.gray(VITE_OUTPUT_DIR + '/' + chalk.green(configFileName)) + '\n');
  } catch (error) {
    console.log(chalk.red(`[${pkg.name}]: \n` + error));
  }
}

export function runBuildConfig() {
  const config = getEnvConfig();
  const configFileName = getShortName();
  createConfig({ config, configName: configFileName });
}
