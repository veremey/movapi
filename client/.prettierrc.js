module.exports = {
  plugins: ['./node_modules/prettier-plugin-multiline-arrays'],
  printWidth: 100,
  max_line_length: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  proseWrap: 'never', //
  // singleAttributePerLine: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  multilineArraysWrapThreshold: 3,
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
