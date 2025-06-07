const fs = require('node:fs');

const jsonStorage = {
  loadJson: (filepath = '') => {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  },
  saveJson: (filepath = '', data) => {
    return fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8');
  }
}

module.exports = jsonStorage;