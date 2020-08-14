const config = require("./webpack.config.js")
const { SourceMapDevToolPlugin } = require("webpack")

config.mode = "production"
delete config.devtool
config.output.filename = "index.min.js"
config.plugins.push(new SourceMapDevToolPlugin({
    test: /\.(js|jsx|)/,
    filename: "[name].js.map",
    publicPath: config.output.publicPath,
}))

module.exports = config