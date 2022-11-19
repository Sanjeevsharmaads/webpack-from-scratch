const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),

    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module : {
        rules : [
            {
                test: /\.[jt]sx?$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react' ],
                    }
                },
                include:path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:'./src/index.html'
    })],
    mode: 'development', //or 'production',

    devServer:{
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        // hotOnly:true
    }
}