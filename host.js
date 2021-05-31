const express = require('express');
const minimist = require('minimist');
const path = require('path');

const app = express();
const args = minimist(process.argv.slice(2));

app.use(express.static(path.join(__dirname, args['path'])));
app.listen(args['port']);

console.log("Server hosting directory:", args['path'], "on:", `http://127.0.0.1:${args['port']}`);