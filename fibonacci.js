var fs  = require('fs');
var returnString = '';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
    	var sum = [0,1];
		for (var x=2; x<=line; x++){
			sum.push(sum[x-1] + sum[x-2]);
		}
		console.log(sum[line]);
	}
});