const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractCSS = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].css",
  chunkFilename: "[id].css"
});

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 2,
    sourceMap: true,
  }
};

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    ident: 'postcss',
    plugins: loader => [
      require('postcss-import')({ root: loader.resourcePath }),
      require('postcss-cssnext')(),
    ]
  }
};

const cssLoaderProd = [
  {
    test: /\.s?[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      cssLoader,
      postCssLoader,
      'sass-loader',
    ]
  },
];

const cssLoaderDev = [
  {
    test: /\.s?[ac]ss$/,
    use: [
      'style-loader',
      cssLoader,
      postCssLoader,
      'sass-loader'
    ],
  },
];


module.exports = {
  prod: {
    loader: cssLoaderProd,
    extract: extractCSS,
  },
  dev: {
    loader: cssLoaderDev
  }
};