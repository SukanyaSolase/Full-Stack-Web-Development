const path = require('path');

module.exports = {
  entry: './src/employees.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'employees.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};