module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // System.js for module loading
      // 'node_modules/systemjs/dist/system-polyfills.js',
      // 'node_modules/systemjs/dist/system.src.js',

      // Polyfills.
      'node_modules/es6-shim/es6-shim.js',
      // 'node_modules/angular2/bundles/angular2-polyfills.js',

      // Zone.js dependencies
      // Note - do not include zone.js itself here, it is already
      // included in angular2-polyfills
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },

      // RxJs.
      { pattern: 'https://code.angularjs.org/tools/system.js', included: true, watched: false },
      // { pattern: 'https://code.angularjs.org/2.0.0-beta.16/Rx.js', included: true, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Angular 2 itself and the testing library.
      // 'node_modules/angular2/bundles/angular2.js',
      // 'node_modules/angular2/bundles/testing.dev.js',


      {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'built/test/matchers.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'built/**/*.js', included: false, watched: true},

      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'built/**/*.html', included: false, watched: true},
      {pattern: 'built/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: false},
      {pattern: 'built/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/built/app/"
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
