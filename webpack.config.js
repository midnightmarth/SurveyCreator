const path = require("path");

const SRC_DIR = path.join(__dirname, "client/src");
const DIST_DIR = path.join(__dirname, "client/dist");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions"]
                  },
                  modules: false // Needed for tree shaking to work.
                }
              ],
              "@babel/preset-react" // https://goo.gl/4aEFV3
            ]
            // plugins: [
            //   "@babel/plugin-proposal-object-rest-spread", // https://goo.gl/LCHWnP
            //   "@babel/plugin-proposal-class-properties" // https://goo.gl/TE6TyG
            // ]
          }
        }
      }
    ]
  }
};
