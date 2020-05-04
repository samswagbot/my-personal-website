const path = require('path');

module.exports = {
    entry: ["@babel/polyfill",'./src/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ],
        }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(pdf|png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
              
            },
          ],
        },
      ],
    },
    watch: true,
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        Assets: path.resolve(__dirname, 'src/assets/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Components: path.resolve(__dirname, 'src/components/')
      }
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'main.js'
    }, 
    devServer: {
      publicPath: "/",
      contentBase: "./dist",
      hot: true,
      historyApiFallback: true
    }
  };