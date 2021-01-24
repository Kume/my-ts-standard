const path = require('path');

const appDirectory = path.resolve(__dirname, '../');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'index.js',
    path: path.resolve(appDirectory, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    alias: {
      // react: path.resolve('./node_modules/react'),
      // 'react-dom': path.resolve('./node_modules/react-dom'),
      // 'react-dnd': path.resolve('./node_modules/react-dnd'),
      // 'react-redux': path.resolve('./node_modules/react-redux'),
      // '@fortawesome/react-fontawesome': path.resolve('./node_modules/@fortawesome/react-fontawesome'),
    },
    extensions: ['.web.js', '.js', '.web.ts', '.ts', '.tsx', '.web.tsx', '.css'],
  },

  devServer: {
    port: 8081,
    contentBase: path.resolve(__dirname, 'public'),
  },
};
