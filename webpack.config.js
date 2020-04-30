const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use:[
              { 
                loader: "babel-loader"
              }
          ]
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
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