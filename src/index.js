function encode(ascii) {
  return Buffer.from(ascii).toString('base64');
}

function decode(base64) {
  return Buffer.from(base64, 'base64');
}

module.exports = {
  encode,
  decode,
};
