import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";

const devServer: DevServerConfiguration = {
  static: {
    directory: path.join(__dirname, "src"),
  },
  historyApiFallback: {
    index: "build/index.html",
  },
  compress: true,
  open: true,
  port: 3000,
};

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"] if no need for separate css file
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
    new HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        REBEM_MOD_DELIM: JSON.stringify("_"),
        REBEM_ELEM_DELIM: JSON.stringify("-"),
      },
    }),
  ],
  devtool: "source-map",
  devServer,
};

export default config;
