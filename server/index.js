const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./http/routes');

const {
  DIST_DIR,
  DIST_DIR_INDEX_FILE,
  DB,
  PORT
} = require('../config/constants');

app.use(bodyParser.json({ limit: '5mb' }));

// Do not run the server on the test environment
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

routes(app);

// Development
if (process.env.NODE_ENV === 'development') {
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  const webpackHotMiddleWare = require("webpack-hot-middleware");
  const webpack = require('webpack');
  const config = require('../config/webpack.dev');
  const compiler = webpack(config);

  const devMiddleware = webpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    noInfo: true,
    hot: true,
  });

  const hotMiddleware = webpackHotMiddleWare(compiler);

  app.use(devMiddleware);
  app.use(hotMiddleware);

  // Dev files are written to memory
  app.get('*', (req, res) => {
    const htmlBuffer = devMiddleware.fileSystem.readFileSync(`${config.output.path}/index.html`);

    res.send(htmlBuffer.toString());
  });

  // Production
} else {
  // make these files public
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => res.sendFile(DIST_DIR_INDEX_FILE));
}

// Add error middleware handler

module.exports = app;
