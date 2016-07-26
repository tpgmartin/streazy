module.exports = {
  entry: {
    'app': [ './src/stream.js', './src/wrapper.js' ]
  },
  eslint: {
    configFile: __dirname + '/.eslintrc'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'streazy.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
