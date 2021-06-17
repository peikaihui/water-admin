// #!/usr/bin/env node

import { argv } from 'yargs';
import { runBuildConfig } from './build-conf';
import chalk from 'chalk';

import { ArgvType } from '../utils';
import pkg from '../../package.json';

export const runBuild = async () => {
  try {
    const argvList = argv as ArgvType;

    // Generate configuration file
    if (!argvList._.includes('no-conf')) {
      await runBuildConfig();
    }

    console.log(`✨ ${chalk.cyan(`[${pkg.name}]`)}` + ' - 打包成功!\n');
  } catch (error) {
    console.log(chalk.red(`[${pkg.name}]:\n` + error));
    process.exit(1);
  }
};
runBuild();
