if (typeof window === 'object') {
  B64 = window.B64;
} else {
  B64 = require('base64-app');
}

describe('Base64 Encoding', () => {
  it('should encodes ASCII', () => {
    const text = 'Hello';
    const encoded = B64.encode(text);
    const decoded = B64.decode(encoded);
    expect(new String(decoded)).toEqual(text);
  });
});
