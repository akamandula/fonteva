const mongoose = require('mongoose');
const { expect } = require('chai');
const { DB } = require('../config/constants');

global.expect = expect;

// create a mongoose connection
before(done => {
  mongoose.connect(DB);
  mongoose
    .connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', err);
    })
});

// drop the mongoose collection before every test
beforeEach(done => {
  const collections = mongoose
    .connection
    .collections;

  Promise
    .all(Object.keys(collections).map(collection => collections[collection].drop()))
    .then(() => done())
    .catch(() => done());
});