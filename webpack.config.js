module.exports = {
  entry: ['./app/assets/javascripts/root.jsx'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },
  plugins: []
};
