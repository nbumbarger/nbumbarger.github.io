var path = require('path');
var process = require('process');
var createHash = require('hash-generator');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackShellPlugin = require('webpack-shell-plugin');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }
  return sources;
}

var jsHash = createHash(10);
var cssHash = createHash(10);

module.exports = {
  entry: {
    bundle: getEntrySources([
      './app/assets/scripts/main'
    ])
  },
  output: {
    publicPath: 'http://localhost:8080/dist',
    filename: `./dist/assets/scripts/[name]-${jsHash}.js`
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
         * but the graphic and font loaders are siloed from one another
         * so that site-referenced SVGs cannot be double-counted */
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader?name=./dist/assets/graphics/[path][name].[ext]&context=./app/assets/graphics',
        exclude: [
          path.resolve(__dirname, 'app/assets/fonts'),
          path.resolve(__dirname, 'app/assets/graphics/collecticons')
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./dist/assets/fonts/[path][name].[ext]&context=./app/assets/fonts',
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
      filename: './dist/index.html',
      template: './app/index.html',
      jsHash: jsHash,
      cssHash: cssHash
    }),
    new ExtractTextPlugin(`dist/assets/styles/main-${cssHash}.css`, {
      allChunks: true
    })
  ]
}
