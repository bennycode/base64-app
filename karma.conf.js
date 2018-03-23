module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['ChromeNoSandbox'],
    client: {
      useIframe: false,
    },
    colors: true,
    concurrency: Infinity,
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    files: [
      'dist/base64-app.bundle.js',
      'spec/Base64Spec.js'
    ],
    frameworks: ['jasmine'],
    port: 9876,
    preprocessors: {
      '**/*.js': ['sourcemap'],
    },
    reporters: ['jasmine-diff', 'progress'],
    singleRun: true,
  });
};
