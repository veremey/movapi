export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      expanded: true,
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
