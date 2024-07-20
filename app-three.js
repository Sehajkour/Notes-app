// app.js

const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js'); // Ensure correct path and file extension

const msg = getNotes();

console.log(chalk.bgBlue(msg));

console.log(validator.isURL('parvashah.com'));
