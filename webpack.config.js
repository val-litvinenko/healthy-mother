const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, `public`)
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `style.css`,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: `./src/index.html`,
      filename: `index.html`
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [`style-loader`,
          MiniCssExtractPlugin.loader,
          `css-loader`,
          `postcss-loader`]
      }
    ]
  },
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    compress: true,
    watchContentBase: true,
  }
};
