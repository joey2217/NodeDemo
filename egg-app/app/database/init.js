'use strict';

const mongoose = require('mongoose');
const db = require('../../config').db;
console.log(db);
mongoose.connect(db, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log(`Connect ${db} success`);
});
