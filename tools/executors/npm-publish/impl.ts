import { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface NpmPublishOptions {
  // TODO: Add support for other flags
  // access: string;
  // tag: string;
  // otp: string;
  dryRun: string;
}

const projectNamePrefix = 'shared-';
const dir = 'dist/packages/shared/';

export default async function echoExecutor(
  options: NpmPublishOptions,
  context: ExecutorContext
) {
  const { projectName } = context;

  console.info(`Executing "npm-publish" on ${projectName}`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);

  const path = `${dir}${projectName.split(projectNamePrefix)[1]}`;

  try {
    const { stdout, stderr } = await promisify(exec)(
      // TODO: fix dynamic flags
      // `npm publish ${path} ${Object.values(options).map(
      //   (i) => `--${kebabCase(i)} `
      // )}`
      `npm publish ${path} ${options.dryRun ? '--dry-run' : ''}`
    );

    console.log('stdout: ', stdout);
    console.error('STDERR: ', stderr);

    console.log(
      options.dryRun
        ? 'Successfully published with dry run flag.'
        : 'Successfully published.'
    );

    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}
