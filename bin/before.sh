#!/bin/bash

# eslint
npm run lint
# 清除 dist 目录
rimraf ./dist
# 执行更新版本号脚本
node ./bin/update-version.js
