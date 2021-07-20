import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { config as initEnv } from "dotenv";

initEnv();

const config: webpack.Configuration = {
  entry: [
    path.join(path.resolve(__dirname, path.join("src", "web")), "mounter.tsx"),
  ],
  output: {
    filename: "web.bundle.js",
    chunkFilename: "chunk-[name].bundle.js",
    path: path.join(__dirname, "docs"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(
        path.resolve(__dirname, path.join("src", "web")),
        "mount.html"
      ),
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "Resources/Fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|svg)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  mode: process.env.NODE_ENV as "development" | "production",
};

export default config;
