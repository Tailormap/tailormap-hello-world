const path = require("path");
const {spawn} = require("child_process");
const fs = require("fs/promises");

const runCommand = (command, args, cwd) => {
  return new Promise((resolve, reject) => {
    const workingDir = cwd || path.resolve(path.dirname('./'));
    const cmd = spawn(command, args, {
      stdio: 'inherit',
      env: process.env,
      cwd: workingDir,
    });
    cmd.on('error', err => {
      console.error(err);
      reject();
    });
    cmd.on('close', (code) => {
      resolve();
    });
  });
};

const getPackageJsonPath = (project) => {
  return path.resolve(__dirname, './projects/', project, 'package.json');
}

const getPackageJson = async (project) => {
  const packageJson = await fs.readFile(getPackageJsonPath(project));
  return JSON.parse(packageJson.toString());
};

const getCurrentVersion = async (project) => {
  return (await getPackageJson(project)).version;
};

const publishRelease = async () => {
  const project = 'hello-world';
  const scope = '@tailormap-b3p';
  await runCommand('npm', ['version', 'patch'], path.resolve(__dirname, './projects/', project));
  await runCommand('npm', ['run', 'build-hello-world']);
  await runCommand('npm', ['publish', '--scope=' + scope, '--registry=https://repo.b3p.nl/nexus/repository/npm-public'], path.resolve(__dirname, './dist/', project));
  await runCommand('git', ['add', '-A']);
  const currentVersion = await getCurrentVersion(project);
  await runCommand('git', ['commit', '-m', `Released version ${currentVersion} of ${project} project`])
}

publishRelease();
