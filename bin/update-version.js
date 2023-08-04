const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const packageJsonPath = path.resolve(__dirname, '../package.json');

function incrementVersion(oldVersion) {
  const parts = oldVersion.split('.');
  parts[2] = parseInt(parts[2], 10) + 1;
  return parts.join('.');
}

function askVersion() {
  rl.question('输入新版本: ', newVersion => {
    const isValidVersion = /^\d+\.\d+\.\d+$/.test(newVersion);

    if (isValidVersion) {
      updateVersion(newVersion);
    } else {
      console.log('版本格式无效。请输入有效版本。');
      askVersion();
    }
  });
}

function updateVersion(newVersion) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  fs.appendFileSync('./version-history.txt', `${newVersion}\n`);

  console.log(`🆕版本更新至 ${newVersion}!`);

  rl.close();
}

rl.question('🔄是否自动更新版本号? (y/n) ', shouldIncrement => {
  if (shouldIncrement.toLowerCase() === 'y') {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const newVersion = incrementVersion(packageJson.version);
    updateVersion(newVersion);
  } else {
    rl.question('🔢是否手动更新版本号? (y/n) ', shouldUpdate => {
      if (shouldUpdate.toLowerCase() === 'y') {
        askVersion();
      } else {
        console.log('🙂版本未更新。');
        rl.close();
      }
    });
  }
});
