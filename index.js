var tsutr = require('typescript-unit-test-runner').run;

tsutr('example/**/*.spec.ts', { project: 'example/tsconfig.json' });