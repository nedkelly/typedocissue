module.exports = {
  mode: 'modules',
  inputFiles: ['./src'],
  out: './docs',
  name: 'Testing Typedoc Issue',
  readme: './README.md',
  exclude: [
    '**/index.*',
    '**/Complex/**',
  ],
  ignoreCompilerErrors: false,
  excludePrivate: false,
  excludeProtected: false,
  excludeExternals: false,
  excludeNotExported: false,
};
