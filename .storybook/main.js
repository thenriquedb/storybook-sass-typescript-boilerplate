const path = require('path');

module.exports = {
  "stories": ["../src/packages/**/stories/*.stories.(mdx|tsx)"],
  "addons": [
    '@storybook/preset-scss',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, {configType}) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./src'),
    ];

    return config;
  }
}