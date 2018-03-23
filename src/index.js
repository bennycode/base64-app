const fs = require('fs');
const Dexie = require('dexie');

function encode(ascii) {
  return Buffer.from(ascii).toString('base64');
}

function encodeToFile(ascii, path) {
  const encoded = encode(ascii);

  return new Promise((resolve, reject) => {
    fs.writeFile(path, encoded, 'utf8', (error) => {
      if (!error) {
        resolve(encoded);
      } else {
        reject(error);
      }
    });
  });
}

function encodeToDatabase(ascii, db) {
  if (!db) {
    db = new Dexie('MyDatabase');
    db.version(1).stores({
      encodings: '++id, ascii, base64'
    });
  }

  const encoded = encode(ascii);
  db.encodings.add({
    ascii,
    base64: encoded,
  });
}

function decode(base64) {
  return Buffer.from(base64, 'base64');
}

module.exports = {
  encode,
  encodeToFile,
  encodeToDatabase,
  decode,
};
