var fs  = require('fs');
var numLines = 0,
	content = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line, index) {
    if (line != '') {
    	index>0 ? content.push(line) : numLines=line;
	}
});

content.sort(function(a,b){
	return b.length - a.length;
});

for (var x=0; x<numLines; x++){
	console.log(content[x]);
}

