module.exports = {
  entry: {
    'streazy': './src/streazy.js',
    'wrapper': './src/wrapper.js'
  },
  eslint: {
    configFile: __dirname + '/.eslintrc'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
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
