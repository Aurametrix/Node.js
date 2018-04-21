module: {
  rules: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [require('faster.js')]
      }
    }
  }]
}
