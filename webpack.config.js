const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: './static',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /(\.scss|\.css)$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          require.resolve('sass-loader') + '?sourceMap'
        ]
      }
    ]
  },
  toolbox: {
    theme: path.join(__dirname, 'app/toolbox-theme.scss')
  },
  plugins: [
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
  ],
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  }
};
