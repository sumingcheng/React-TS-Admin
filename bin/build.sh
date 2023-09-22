#!/bin/bash

GREEN_COLOR="\033[32m"
RESET_COLOR="\033[0m"
RED_COLOR="\033[31m"
BLUE_COLOR="\033[34m"

print_green_message() {
  echo -e "${GREEN_COLOR}$1${RESET_COLOR}\n"
}

print_red_message() {
  echo -e "${RED_COLOR}$1${RESET_COLOR}\n"
}

print_blue_message() {
  echo -e "${BLUE_COLOR}$1${RESET_COLOR}\n"
}

# Get the first argument passed to the script
APP_ENV_VALUE="$1"

# Exit the whole script when receiving SIGINT signal
trap "print_green_message 'Exiting...'; exit" SIGINT

# eslint
print_blue_message "Running eslint..."
npm run lint
print_green_message "eslint completed!"

# stylelint
print_blue_message "Running stylelint..."
npm run stylelint
print_green_message "stylelint completed!"

# Clearing dist directory
print_blue_message "Clearing dist directory..."
rimraf ./dist
print_green_message "dist directory cleared!"

# Run update version script
node ./bin/update-version.js "$APP_ENV_VALUE"

# Run webpack with the passed argument
print_blue_message "Starting webpack build..."
cross-env NODE_ENV=production APP_ENV="$APP_ENV_VALUE" webpack
print_green_message "webpack build successful!"

# Run file compression script
print_blue_message "Building compressed file..."
node ./bin/zip.js
print_green_message "File build completed!"
