const path = require('path')
const webpack = require('webpack')
const createHash = require('hash-generator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

var jsHash = createHash(10)
var cssHash = createHash(10)

module.exports = {
  entry: {
    app: './app/assets/scripts/main'
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './dist#',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot-loader',
          'jsx-loader',
          'babel-loader?presets[]=latest&presets[]=react'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?url=false',
            `sass-loader?includePaths[]=${path.resolve(__dirname, 'node_modules/bourbon/app/assets/stylesheets')}`
          ]
        })
      },
      {
        /* the "graphics" and "fonts" directories are copied explicitly,
         * but are additionally siloed in their loaders so that SVGs
         * referenced in code cannot be double-counted */
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader?name=dist/assets/graphics/[path][name].[ext]&context=app/assets/graphics',
        exclude: path.resolve(__dirname, 'app/assets/fonts')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=dist/assets/fonts/[path][name].[ext]&context=app/assets/fonts',
        exclude: path.resolve(__dirname, 'app/assets/graphics')
      }
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: [
        'node_modules/collecticons-processor/bin/collecticons.js ' +
        'compile ' +
        'app/assets/graphics/collecticons ' +
        '--font-embed ' +
        '--font-dest app/assets/fonts ' +
        '--font-name Collecticons ' +
        '--font-types woff ' +
        '--style-format sass ' +
        '--style-dest app/assets/styles ' +
        '--style-name collecticons ' +
        '--class-name collecticon ' +
        '--author-name Development Seed ' +
        '--author-url https://developmentseed.org/ ' +
        '--no-preview'
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'dist/index.html',
      template: 'app/index.html',
      jsHash: jsHash,
      cssHash: cssHash
    }),
    new ExtractTextPlugin(`dist/assets/styles/main-${cssHash}.css`, {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: `dist/assets/scripts/[name]-${jsHash}.js`,
    path: path.resolve(__dirname, 'public')
  }
}



//var path = require('path')
//var process = require('process')
//var createHash = require('hash-generator')
//var HtmlWebpackPlugin = require('html-webpack-plugin')
//var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var WebpackShellPlugin = require('webpack-shell-plugin')
//
//function getEntrySources (sources) {
//  if (process.env.NODE_ENV !== 'production') {
//    sources.push('webpack-dev-server/client?http://localhost:8080')
//    sources.push('webpack/hot/only-dev-server')
//  }
//  return sources
//}
//
//var jsHash = createHash(10)
//var cssHash = createHash(10)
//
//module.exports = {
//  entry: {
//    bundle: getEntrySources([
//      './app/assets/scripts/main'
//    ])
//  },
//  output: {
//    publicPath: 'http://localhost:8080',
//    filename: `dist/assets/scripts/[name]-${jsHash}.js`
//  },
//  module: {
//    loaders: [
//      {
//        test: /\.js$/,
//        loaders: [
//          'react-hot-loader',
//          'jsx-loader',
//          'babel-loader?presets[]=latest&presets[]=react'
//        ],
//        exclude: /node_modules/
//      },
//      {
//        test: /\.scss$/,
//        use: ExtractTextPlugin.extract({
//          fallback: 'style-loader',
//          use: [
//            'css-loader?url=false',
//            `sass-loader?includePaths[]=${path.resolve(__dirname, 'node_modules/bourbon/app/assets/stylesheets')}`
//          ]
//        })
//      },
//      {
//        /* the "graphics" and "fonts" directories are copied explicitly,
//         * but are additionally siloed in their loaders so that SVGs
//         * referenced in code cannot be double-counted */
//        test: /\.(png|jpg|jpeg|gif|svg)$/,
//        loader: 'file-loader?name=dist/assets/graphics/[path][name].[ext]&context=app/assets/graphics',
//        exclude: path.resolve(__dirname, 'app/assets/fonts')
//      },
//      {
//        test: /\.(eot|svg|ttf|woff|woff2)$/,
//        loader: 'file-loader?name=dist/assets/fonts/[path][name].[ext]&context=app/assets/fonts',
//        exclude: path.resolve(__dirname, 'app/assets/graphics')
//      }
//    ]
//  },
//  plugins: [
//    new WebpackShellPlugin({
//      onBuildStart: [
//        'node_modules/collecticons-processor/bin/collecticons.js ' +
//        'compile ' +
//        'app/assets/graphics/collecticons ' +
//        '--font-embed ' +
//        '--font-dest app/assets/fonts ' +
//        '--font-name Collecticons ' +
//        '--font-types woff ' +
//        '--style-format sass ' +
//        '--style-dest app/assets/styles ' +
//        '--style-name collecticons ' +
//        '--class-name collecticon ' +
//        '--author-name Development Seed ' +
//        '--author-url https://developmentseed.org/ ' +
//        '--no-preview'
//      ]
//    }),
//    new HtmlWebpackPlugin({
//      filename: 'dist/index.html',
//      template: 'app/index.html',
//      jsHash: jsHash,
//      cssHash: cssHash
//    }),
//    new ExtractTextPlugin(`dist/assets/styles/main-${cssHash}.css`, {
//      allChunks: true
//    })
//  ]
//}
