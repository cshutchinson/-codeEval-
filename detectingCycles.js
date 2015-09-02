var fs  = require('fs');
var turtle=0,
	hare=null,
	i=1;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != '') {
    	var lineArr = line.split(' ').map(function(elem){
    		return parseInt(elem,10)
    	});
    	console.log(lineArr);
    	
	}

	// set turtle and hare to start of array

	// increment turtle by 1 - increment hare by 2

	// are array values equal -> cycle exists

	// are array values null -> end of list no cycle


    while (turtle !== hare){
    	turtle = lineArr[i-1];
    	hare = lineArr[i*2-1]; 
    	console.log('turtle: ' + turtle + ' hare: ' + hare);
    	i++
    }

	if (turtle===hare){
		console.log (i-2);
		console.log (i*2-1);
		
	}


});






