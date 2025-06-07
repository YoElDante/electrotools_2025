require('dotenv');
const path = require('node:path');

const config = {
  dbPath: {
    products: path.resolve(__dirname, '../data/products.db.json'),
    users: path.resolve(__dirname, '../data/users.db.json')
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  }
}

module.exports = config;