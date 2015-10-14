## Intro

This repository is a seed Angular2 application, with a focus on showing how
unit tests can be written and run.

## Software Prerequisites

In order to run this seed, the following software is required

### Git

See [Setting Up Git](https://help.github.com/articles/set-up-git/) from the GitHub guides.

### Node.js and npm

Node.js and Node's package manager, npm, are used for installing dependencies,
running the build steps, and running tests.


## Getting Started

Begin by cloning the repository.

Run `npm install` to get dependencies.

Take a look at the `src` folder. All application and test code, as well as
some configuration files, are in here. The `app` folder contains the actual
application code, written in TypeScript, as well as associated template and
css files. The `test` folder contains unit tests.

## The Build/Test Pipeline

To be as minimal as possible, this repo uses npm scripts for all building
and testing steps. You can see exactly what the scripts do in `package.json`. A
more complex application would probably consider using a tool such as grunt
or gulp to manage development pipelines.

### Build

The build step invokes the TypeScript compiler to create es5 javascript
files and source maps from the `.ts` files. Run with:

`npm run build`

You can examine the configuration for the TypeScript compiler in `app/tsconfig.json`.
The generated files are output in the same folder as their sources.

(Note: We use `module: system` instead of `commonjs`, but it makes tsc complain
about not being able to find the module `angular2`. TODO: Look into why this is.)

To remove all generated files, run:

`npm run clean`.

### Watch

The watch step can be run with:

`npm run watch`

This runs the TypeScript compiler with the additional `--watch` flag, which causes
it to recomiple whenever a `.ts` file changes.

Run this process indefinitely in a different tab or in the background, since
the following commands will use it.

### Serve

To see the app, run

`npm run serve`

and navigate to `localhost:9090/src/index.html`.

### Test

We use Karma with the Jasmine test framework to run unit tests. Try them with

`npm run test`

This will start a persistent process which will re-run tests whenever the `.js`
compiled files are changed. If you have the watch process running, that will
trigger the tests to run whenever you change the `.ts` source files.

You can see the Karma configuration at `karma.conf.js`. A few things are notable:

 - It grabs Angular by including the `angular2` and `testing.js` files from
 `node_modules/angular2/bundles/`.

 - The compiled JavaScript files at `src/**/*.js` are served and watched but _not_ included.
 This means that Karma will not run them automatically.

 - To get file imports to work correctly in Kamra, we must include `systemjs`
 from the node_modules folder, as well as the helper file `src/karma-test-shim.js`.
 This shim file uses System.js to load the JavaScript files which Karma served
 but did not automatically run.
 