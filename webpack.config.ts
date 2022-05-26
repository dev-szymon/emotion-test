import path from "path";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const webpackConfig = (env: any): Configuration => ({
 entry: "./src/index.tsx",
 ...(env.production || !env.development ? {} : { devtool: "eval-source-map" }),
 resolve: {
  extensions: [".ts", ".tsx", ".js"],
 },
 output: {
  path: path.join(__dirname, "/dist"),
  filename: "build.js",
 },
 module: {
  rules: [
   {
    test: /\.tsx?$/,
    loader: "ts-loader",
    options: {
     transpileOnly: true,
    },
    exclude: /dist/,
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./public/index.html",
  }),
  new webpack.DefinePlugin({
   "process.env.PRODUCTION": env.production || !env.development,
   "process.env.NAME": JSON.stringify(require("./package.json").name),
   "process.env.VERSION": JSON.stringify(require("./package.json").version),
  }),
 ],
});

export default webpackConfig;
