#!/bin/bash

# 当接收到 SIGINT 信号时退出整个脚本
trap "echo '停止编译'; exit" SIGINT

# eslint
npm run lint

# 清除 dist 目录
rimraf ./dist

# 执行更新版本号脚本
node ./bin/update-version.js

# 获取传递给脚本的第一个参数
APP_ENV_VALUE=$1

# 使用传递的参数执行 webpack
cross-env APP_ENV=$APP_ENV_VALUE webpack

# 执行压缩文件脚本
node ./bin/zip.js
