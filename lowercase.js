var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
		var lineArray = line.split(' ');
		var lcArray = lineArray.map(function(elem){
			return elem.toLowerCase();
		});
		console.log(lcArray.join(' ').toString());
    }
})