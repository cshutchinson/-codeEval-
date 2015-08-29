var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
		var lineArray = line.split('');
		var total = lineArray.reduce(function(a,b){
			return(parseInt(a,10)+parseInt(b,10));
		});
		console.log(total);
	}
});
