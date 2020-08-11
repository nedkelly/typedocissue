module.exports = {
  mode: 'modules',
  inputFiles: ['./src'],
  out: './docs',
  name: 'Testing Typedoc Issue',
  readme: './README.md',
  exclude: [
    '**/index.*',
    '**/node_modules/**',
    // '**/Complex/**',
  ],
  ignoreCompilerErrors: true,
  excludePrivate: false,
  excludeProtected: false,
  excludeExternals: false,
  excludeNotExported: false,
};
