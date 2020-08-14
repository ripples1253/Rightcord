const config = require("./webpack.config.js")

config.mode = "production"
delete config.devtool
config.output.filename = "main.min.js"
config.plugins.push(new SourceMapDevToolPlugin({
    test: /\.(js|jsx|)/,
    filename: "[name].js.map",
    publicPath: config.output.publicPath,
}))

module.exports = config