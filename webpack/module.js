const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CONFIG = require('../config');

const Module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      }
    },
    {
      test: /\.less$/,
      use: [
        CONFIG.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          }
        }
      ]
    }
  ]
}

module.exports = Module
