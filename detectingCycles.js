var fs  = require('fs');


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
    	var lineArr = line.split(' ').map(function(elem){
    		return parseInt(elem,10)
    	});
    	console.log(lineArr);
	}
});