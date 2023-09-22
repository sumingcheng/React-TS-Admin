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

APP_ENV_VALUE="$1"

cross-env NODE_ENV=development APP_ENV="$APP_ENV_VALUE" webpack serve --progress --color
