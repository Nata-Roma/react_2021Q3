const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    client: path.resolve(__dirname, 'src/client.tsx'),
    // client: "./src/index.tsx",
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/static'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'src/assets/[hash][ext]',
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.client.json',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: 'public',
        },
      ],
    }),
  ],
}