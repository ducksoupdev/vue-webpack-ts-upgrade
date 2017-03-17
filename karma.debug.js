var webpackConfig = require('./webpack.config');

webpackConfig.module.rules = [{
    test: /\.ts$/,
    exclude: /node_modules/,
    loader: "ts-loader",
    query: {
      compilerOptions: {
        inlineSourceMap: true,
        sourceMap: false
      }
    }
  },
  {
    test: /\.html$/,
    loader: 'raw-loader',
    exclude: ['./src/index.html']
  }
];

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'source-map-support'],
    files: [
      'node_modules/es6-promise/dist/es6-promise.auto.js',
      'src/test.ts'
    ],
    reporters: ['mocha'],
    preprocessors: {
      'src/test.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'source-map',
      resolve: webpackConfig.resolve,
      module: webpackConfig.module
    },
    webpackServer: {
      noInfo: true
    },
    mime: {
      'text/x-typescript': ['ts']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
