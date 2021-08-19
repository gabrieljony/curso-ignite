const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isDevelopment = process.env.NODE_ENV !== "production"

//https://webpack.js.org/configuration/
module.exports = {
    mode: isDevelopment ? "development" : "production", // "production" | "development" | "none"
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: path.resolve(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        inline: true, // reload na pagina automaticamente
        contentBase: path.resolve(__dirname, "public"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        })
    ],
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                // Conditions:
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                // Conditions:
                test: /\.scss?$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    }
};