/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';

fs.readdirSync(__dirname).forEach(file => {
  /* If its the current file ignore it */
  if (file === 'index.js') return;

  /* Store module with its name (from filename) */
  // eslint-disable-next-line global-require
  module.exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
});
