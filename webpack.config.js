module.exports = {
  entry: './src/streazy.js',
  output: {
    path: __dirname + '/dist',
    filename: 'streazy.js'
  },
  module: {
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
