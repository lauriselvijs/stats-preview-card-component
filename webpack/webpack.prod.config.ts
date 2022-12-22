import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import WebpackAssetsManifest from "webpack-assets-manifest";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";

const config: Configuration = {
  mode: "production",
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "static/js/main.[contenthash].js",
    clean: true,
    assetModuleFilename: "static/media/[name].[contenthash][ext]",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"] if no need for separate css file
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
    new MiniCssExtractPlugin({
      filename: "static/css/main.[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./" },
        { from: "./public/robots.txt", to: "./" },
        { from: "./public/logo192.png", to: "./" },
        { from: "./public/logo512.png", to: "./" },
      ],
    }),
    new WebpackAssetsManifest({
      output: "asset-manifest.json",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        REBEM_MOD_DELIM: JSON.stringify("_"),
        REBEM_ELEM_DELIM: JSON.stringify("-"),
      },
    }),
  ],
};

export default config;
