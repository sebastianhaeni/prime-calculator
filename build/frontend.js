/**
 * Builds the frontend and starts a server with live reload.
 */
const childProcess = require('child_process');
const path = require('path');

var isWin = /^win/.test(process.platform);
var extension = isWin ? '.cmd' : '';

console.log("Running app at http://localhost:3000");
var child = childProcess.execFile(`.${path.sep}node_modules${path.sep}.bin${path.sep}gulp${extension}`, ['server'], function(error, stdout, stderr) {
    console.log(stdout);
});
child.stdout.on('data', function(data) {
    console.log(data);
});

if(process.env.npm_config_argv.indexOf('--open') >= 0){
    require('open')('http://localhost:3000');
}
