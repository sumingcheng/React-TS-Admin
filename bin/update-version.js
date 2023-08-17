const fs = require('fs')
const readline = require('readline')
const path = require('path')
const dayjs = require('dayjs')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const packageJsonPath = path.resolve(__dirname, '../package.json')
const versionHistoryPath = path.resolve(__dirname, './version-history.json')

function incrementVersion(oldVersion) {
  const parts = oldVersion.split('.')
  parts[2] = parseInt(parts[2], 10) + 1
  return parts.join('.')
}

function askVersion() {
  rl.question('输入新版本: ', newVersion => {
    const isValidVersion = /^\d+\.\d+\.\d+$/.test(newVersion)

    if (isValidVersion) {
      updateVersion(newVersion)
    } else {
      console.log('版本格式无效。请输入有效版本。')
      askVersion()
    }
  })
}

function updateVersion(newVersion) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  packageJson.version = newVersion
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

  // 检查 version-history.json 文件是否存在
  if (!fs.existsSync(versionHistoryPath)) {
    // 如果文件不存在，创建一个包含空数组的新文件
    fs.writeFileSync(versionHistoryPath, JSON.stringify([], null, 2))
  }

  const now = dayjs().format('YYYY年M月D日 H:mm:ss')
  const versionHistory = JSON.parse(fs.readFileSync(versionHistoryPath, 'utf8'))
  versionHistory.unshift({ version: newVersion, date: now })
  fs.writeFileSync(versionHistoryPath, JSON.stringify(versionHistory, null, 2))

  console.log(`🆕版本更新至 ${newVersion}!`)

  rl.close()
}

rl.question('🔄是否自动更新版本号? (y/n) ', shouldIncrement => {
  if (shouldIncrement.toLowerCase() === 'y') {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    const newVersion = incrementVersion(packageJson.version)
    updateVersion(newVersion)
  } else {
    rl.question('🔢是否手动更新版本号? (y/n) ', shouldUpdate => {
      if (shouldUpdate.toLowerCase() === 'y') {
        askVersion()
      } else {
        console.log('🙂版本未更新。')
        rl.close()
      }
    })
  }
})
