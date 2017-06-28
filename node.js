/**
 * Copyright 2016-2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/* eslint-env node */

module.exports = {
   extends: require.resolve( './index' ),
   env: {
      browser: false,
      node: true
   },
   rules: {
      // not supported by node v4:
      'prefer-rest-params': 'off',
      'prefer-spread': 'off',
      'prefer-template': 'off'
   }
};
