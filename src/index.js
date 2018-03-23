const fs = require('fs');

function encode(ascii) {
  return Buffer.from(ascii).toString('base64');
}

function encodeToFile(ascii, path) {
  const encoded = encode(ascii);
  fs.writeFileSync(path, encoded, 'utf8');
}

function decode(base64) {
  return Buffer.from(base64, 'base64');
}

module.exports = {
  encode,
  encodeToFile,
  decode,
};
