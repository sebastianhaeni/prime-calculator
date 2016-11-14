/**
 * Builds the propel models and builds the frontend.
 */

const fs = require('fs');
const childProcess = require('child_process');

var isWin = /^win/.test(process.platform);

// Generate static js resources
console.log('Generating frontend...');
childProcess.execFileSync('.\\node_modules\\.bin\\gulp' + isWin ? '.cmd' : '');

console.log('Done!');
