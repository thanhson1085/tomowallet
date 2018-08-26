const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      '@': resolve('app')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [ 'stylus-loader', 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin()
  ]
}
