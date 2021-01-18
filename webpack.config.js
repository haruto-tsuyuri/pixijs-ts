"use strict";
exports.__esModule = true;
var path = require("path");
var glob = require("glob");
var entries = glob.sync("./src/modules/*.js");
var rules = [
    {
        test: /\.ts$/,
        use: "ts-loader"
    }
];
var module = {
    rules: rules
};
var config = {
    entry: entries,
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: module,
    mode: 'development'
};
exports["default"] = config;
//# sourceMappingURL=webpack.config.js.map