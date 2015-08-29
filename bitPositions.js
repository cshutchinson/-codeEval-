var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
		var lineArray = line.split(',');
		var binary = parseInt(lineArray[0], 10).toString(2).split('').reverse();
		// console.log(binary);
		// console.log(binary[lineArray[1]-1]);
		// console.log(binary[lineArray[2]-1]);

		if(binary[lineArray[1]-1]===binary[lineArray[2]-1]){
			console.log('true');
		} else {
			console.log('false');
		}
    }
})