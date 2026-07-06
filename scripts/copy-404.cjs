const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
const notFoundPath = path.join(__dirname, '..', 'dist', '404.html');

fs.copyFileSync(indexPath, notFoundPath);
