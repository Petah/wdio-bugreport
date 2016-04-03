exports.config = {
  specs: ['./index.js'],

  capabilities: [{
    browserName: 'phantomjs'
  }],

  maxInstances: 1,

  logLevel: 'verbose',

  coloredLogs: true,

  screenshotPath: './errorShots/',

  framework: 'mocha',

  reporters: ['dot'],

  before: function () {},
};
