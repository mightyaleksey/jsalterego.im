'use strict';

module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      generateScopedName: '_[name]_[local]__[hash:base64:5]',
    },
  },
};
