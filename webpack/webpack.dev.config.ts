import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";

const devServer: DevServerConfiguration = {
  historyApiFallback: true,
  compress: true,
  open: true,
  port: 3000,
};

const config: Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
      favicon: "./public/favicon-32x32.png",
      manifest: "./public/manifest.json",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./" },
        { from: "./public/robots.txt", to: "./" },
        { from: "./public/logo192.png", to: "./" },
        { from: "./public/logo512.png", to: "./" },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.REBEM_MOD_DELIM": JSON.stringify("_"),
      "process.env.REBEM_ELEM_DELIM": JSON.stringify("-"),
    }),
  ],
  devtool: "source-map",
  devServer,
};

export default config;
