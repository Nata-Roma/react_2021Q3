const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = require('./webpack.common').createConfig({
  target: 'client'
});

module.exports = {
  ...config,

  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin,
          "css-loader"
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ]
  },
  plugins: [
    ...config.plugins,
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/index.html'),
    // }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: 'public',
        },
      ],
    }),
    new ESLintPlugin ({
      context: './src',
      extensions: [".tsx", ".ts", ".js"],
      fix: false,
      failOnError: true,
    }),
  ],
}
