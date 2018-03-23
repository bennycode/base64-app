const util = require('util');
const debuglog = util.debuglog('MyApp');
const {encodeToFile} = require('./index');

process.on('uncaughtException', (err) => {
  console.log('catched synchronous error');
});

process.on('unhandledRejection', (reason, p) => {
  console.log('Catched!');
});

encodeToFile('Hello, World!', `${__dirname}/test.txt`);
