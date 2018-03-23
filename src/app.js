const util = require('util');
const debuglog = util.debuglog('MyApp');
const {encodeToFile} = require('./index');

encodeToFile('Hello, World!', `${__dirname}/test.txt`);
