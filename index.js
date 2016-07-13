/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/* eslint-env node */

const fs = require( 'fs' );
const path = require( 'path' );

const configPath = path.join( __dirname, '.eslintrc.json' );
module.exports = JSON.parse( fs.readFileSync( configPath, 'utf8' ) );
