const pkg = require('./package.json');
const webpack = require('webpack');

const projectName = pkg.name;

module.exports = {
  entry: {
    [projectName]: `${__dirname}/${pkg.main}`,
  },
  output: {
    filename: '[name].bundle.js',
    library: 'B64',
    path: `${__dirname}/dist`,
  },
  node: {
    fs: 'empty',
  },
  plugins: [new webpack.BannerPlugin(`${pkg.name} v${pkg.version}`)],
  target: 'web',
};
