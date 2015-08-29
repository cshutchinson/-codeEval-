var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
		const lineArray = line.split(',');
		console.log(Math.ceil(lineArray[0]/lineArray[1])*lineArray[1]);
    }
})