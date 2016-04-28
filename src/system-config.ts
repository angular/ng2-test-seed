declare var System: { config: (any) => void };


const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/tesing',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];


// Angular CLI SystemJS configuration.
System.config({
  map: {
    '@angular': '../../node_modules/@angular',
  },
  packages: barrels.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {})
});

// TODO(hansl): remove this when moving from @igorminar/* to @angular/*
// System.config({
//   packages: {
//     '@igorminar/platform-browser': {
//       defaultExtension: 'js',
//       main: 'platform_browser'
//     },
//     '@igorminar/platform-browser-dynamic': {
//       defaultExtension: 'js',
//       main: 'platform_browser_dynamic'
//     }
//   }
// });


// // Add your custom SystemJS configuration here.
// System.config({
//   packages: {
//     // Add your custom SystemJS packages here.
//   }
// });
