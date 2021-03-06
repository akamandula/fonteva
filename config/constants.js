const path = require('path');
const ROOT_DIR = path.join(__dirname, '../');
const SERVER_DIR = path.join(__dirname, '../server');
const MIGRATIONS_DIR = path.join(SERVER_DIR, 'migrations');
const SEEDS_DIR = path.join(SERVER_DIR, 'seeds');
const DIST_DIR = path.join(__dirname, '../dist');
const ENTRY_FILE = path.join(__dirname, '../client/index.js');
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const DIST_DIR_INDEX_FILE = path.join(DIST_DIR, 'index.html');
const TEMPLATE_FILE = path.join(TEMPLATES_DIR, 'template.html');

// database
const { MONGO_USER, MONGO_PASS, MONGO_PORT, MONGO_DB, MONGO_HOSTNAME, } = process.env;
const DB_USERNAME_PASSWORD = MONGO_USER && MONGO_PASS ? `${MONGO_USER}:${MONGO_PASS}@` : '';
const DB = `mongodb://${DB_USERNAME_PASSWORD}${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

// prod
const VENDOR_LIBS = [
  'babel-polyfill',
  'react',
  'react-dom',
];

// Environment Variables to add
const ENV_VARS = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  PORT: JSON.stringify(process.env.PORT),
  HOSTNAME: JSON.stringify(process.env.HOSTNAME),
  OKTA_CLIENT_ID: JSON.stringify(process.env.OKTA_CLIENT_ID),
  OKTA_CLIENT_URL: JSON.stringify(process.env.OKTA_CLIENT_URL)
};

// express
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOSTNAME || 'localhost';

module.exports = {
  ROOT_DIR,
  ENTRY_FILE,
  VENDOR_LIBS,
  TEMPLATE_FILE,
  DIST_DIR,
  DIST_DIR_INDEX_FILE,
  PORT,
  HOST,
  DB,
  ENV_VARS,
  MIGRATIONS_DIR,
  SEEDS_DIR,
};
