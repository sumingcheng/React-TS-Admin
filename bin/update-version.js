const fs = require('fs')
const readline = require('readline')
const path = require('path')
const dayjs = require('dayjs')

// 获取环境配置文件
const ProcessArgv = process.argv[2]
const packagingEnvironmentPath = path.resolve(
  __dirname,
  `../config/${ProcessArgv}.js`
)
const packagingEnvironment = require(packagingEnvironmentPath)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 获取 package.json
const packageJsonPath = path.resolve(__dirname, '../package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

// 版本历史
const versionHistoryPath = path.resolve(
  __dirname,
  '../config/version-history.json'
)

function incrementVersion(oldVersion) {
  const parts = oldVersion.split('.')
  parts[2] = parseInt(parts[2], 10) + 1
  return parts.join('.')
}

function updateConfigVersion(newVersion) {
  const configData = fs.readFileSync(packagingEnvironmentPath, 'utf8')
  const updatedConfigData = configData.replace(
    /version: '.*?'/,
    `version: '${newVersion}'`
  )
  fs.writeFileSync(packagingEnvironmentPath, updatedConfigData)
}

function updateVersionHistory(newVersion) {
  const now = dayjs().format('YYYY年M月D日 H:mm:ss')
  const versionHistory = fs.existsSync(versionHistoryPath)
    ? JSON.parse(fs.readFileSync(versionHistoryPath, 'utf8'))
    : []
  versionHistory.unshift({
    configEnv: ProcessArgv,
    version: newVersion,
    date: now
  }) // Added the configEnv field here
  fs.writeFileSync(versionHistoryPath, JSON.stringify(versionHistory, null, 2))
}

function updateVersion(newVersion) {
  // Update package.json
  packageJson.version = newVersion
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

  // Update config version
  updateConfigVersion(newVersion)

  // Update version history
  updateVersionHistory(newVersion)
}

rl.question('🔄是否自动更新版本号? (y/n) ', shouldIncrement => {
  if (shouldIncrement.toLowerCase() === 'y') {
    const newVersion = incrementVersion(packagingEnvironment.version)
    updateVersion(newVersion)
    rl.close()
  } else {
    rl.question('输入新版本: ', newVersion => {
      const isValidVersion = /^\d+\.\d+\.\d+$/.test(newVersion)
      if (isValidVersion) {
        updateVersion(newVersion)
        rl.close()
      } else {
        console.log('版本格式无效。请输入有效版本。')
        rl.close()
      }
    })
  }
})
