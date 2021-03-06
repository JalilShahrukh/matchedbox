const path = require('path'); 

module.exports = { 
  entry: './src/index.js',
  output: { 
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  }, 
  module: { 
    rules: [
      { 
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, 
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, 
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}