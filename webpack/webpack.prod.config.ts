import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

const config: Configuration = {
  mode: "production",
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
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
        use: "babel-loader",
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.REBEM_MOD_DELIM": JSON.stringify("_"),
      "process.env.REBEM_ELEM_DELIM": JSON.stringify("-"),
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
          ],
        },
      },
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      threshold: 1 * 1024,
    }),
  ],
};

export default config;
