"use strict";

let fs = require('fs');
let auth = require('./controllers/authGoogle.js');
fs.readFile('data/auth-data.json', 'utf-8', (err, data) => auth.authMethod(data));


// console.log('In authentication process!!');