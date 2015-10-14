## Software Prerequisites

### Git

### Node

### npm

## The Build Pipeline

For now, manual via command line:

Use tsc to build the files:

```
./node_modules/.bin/tsc --outDir build -p src --watch
```

(Note: We use `module: system` instead of `commonjs`, but it makes tsc complain
about not being able to find the module `angular2`. Look into why this is.)