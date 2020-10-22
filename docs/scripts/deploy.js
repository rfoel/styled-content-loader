const exec = require('execa')

const deploy = async () => {
  try {
    await exec('git', ['checkout', '--orphan', 'gh-pages'])
    await exec('yarn', ['build'])
    const folderName = 'build'
    await exec('git', ['--work-tree', folderName, 'add', '--all'])
    await exec('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
    await exec('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    await exec('rm', ['-r', folderName])
    await exec('git', ['checkout', '-f', 'master'])
    await exec('git', ['branch', '-D', 'gh-pages'])
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}

deploy()
