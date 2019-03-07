const path = require("path");

const taker = path.join(__dirname, "client/taker");
const creater = path.join(__dirname, "client/creater");
const DIST_DIR = path.join(__dirname, "client/dist");
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  // mode: NODE_ENV, // mode defined when started from package.json
  entry: {
    taker: taker,
    creater: creater
  },
  output: {
    path: DIST_DIR,
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-react-constant-elements"
            ]
          }
        }
      }
    ]
  }
};
