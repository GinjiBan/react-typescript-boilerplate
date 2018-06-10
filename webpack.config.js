const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src/index.tsx"),
    // resolve: {
    //     extensions: [".tsx"] // Allow to omit extension when importing file
    // },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },

    module: {
        rules: [
            { test: /\.tsx$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, "src/index.html"),
                to: path.join(__dirname, "dist")
            }
        ])
    ],
    mode: process.env.NODE_ENV || "development"
};
