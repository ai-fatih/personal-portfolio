const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    main: './public/assets/js/script.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    port: 3000,
    open: true
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: './public'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
