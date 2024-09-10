const path = require('path');

module.exports = {
  entry: './src/calcio-live-card.js',
  output: {
    filename: 'calcio-live-card.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "> 0.25%, not dead" // Imposta il target per un supporto ampio dei browser
              }]
            ]
          }
        }
      }
    ]
  },
  mode: 'production'
};
