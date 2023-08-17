#!/bin/bash

GREEN_COLOR="\033[32m"
RESET_COLOR="\033[0m"

print_green_message() {
  echo -e "${GREEN_COLOR}$1${RESET_COLOR}\n\n\n"
}

# 获取传递给脚本的第一个参数
APP_ENV_VALUE=$1

# 当接收到 SIGINT 信号时退出整个脚本
trap "print_green_message '已退出'; exit" SIGINT

# eslint
print_green_message "开始执行 eslint..."
npm run lint
print_green_message "eslint 执行成功！"

# 清除 dist 目录
print_green_message "开始清除 dist 目录..."
rimraf ./dist
print_green_message "dist 目录清除成功！"

# 执行更新版本号脚本
node ./bin/update-version.js

# 使用传递的参数执行 webpack
print_green_message "开始执行 webpack 打包..."
cross-env APP_ENV=$APP_ENV_VALUE webpack
print_green_message "webpack 打包成功！"

# 执行压缩文件脚本
print_green_message "开始构建压缩文件..."
node ./bin/zip.js
print_green_message "文件构建成功！"
