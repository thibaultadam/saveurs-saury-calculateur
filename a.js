const fs  = require('fs');
const path  = require('path');

const files = fs.readdirSync(path.join(__dirname, './build/app-ressources'));

console.log(files);