var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
		var lineArray = line.split(' ').reverse().join(' ');
		console.log(lineArray);
    }
})