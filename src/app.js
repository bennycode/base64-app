const util = require('util');
const debuglog = util.debuglog('MyApp');
const {encode, decode} = require('./index');

const ascii = 'Hello, World!';
const encoded = encode(ascii);
const decoded = decode(encoded);

debuglog('Base64 encoded: %s', encoded);
debuglog('Base64 decoded: %s', decoded);
