/**
 * Builds the propel models and builds the frontend.
 */

const fs = require('fs');
const childProcess = require('child_process');

var isWin = /^win/.test(process.platform);
var extension = isWin ? '.cmd' : '';

// Generate static js resources
console.log('Generating frontend...');
childProcess.execFileSync(`.${path.sep}node_modules${path.sep}.bin${path.sep}gulp${extension}`);

console.log('Done!');
